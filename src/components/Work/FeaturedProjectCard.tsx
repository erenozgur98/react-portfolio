import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { featuredProjectData } from '../../data/projects'
import { handleImageErrorWithFallback, handleImageErrorWithFlexFallback } from '../../hooks/useImageFallback'
import { getProjectLinkIconByType, getProjectLinkLabelByType } from './projectLinkUtils'
import { ImageLightbox } from './ImageLightbox'
import {
  FeaturedProjectCardWrapper,
  FeaturedProjectTopSection,
  FeaturedProjectTextContent,
  FeaturedProjectTitle,
  FeaturedProjectSubtitle,
  CaseStudyContentRow,
  CaseStudySectionLabel,
  CaseStudyDescriptionText,
  FeaturedProjectMockupContainer,
  FeaturedProjectScreenshotImage,
  BrowserWindowMockupContainer,
  BrowserWindowTopBar,
  BrowserWindowTrafficLightDot,
  BrowserWindowContentArea,
  BrowserContentPlaceholderLine,
  FeaturedProjectStatsStrip,
  StatItemContainer,
  StatValueNumber,
  StatLabelText,
  FeaturedProjectFooter,
  FeaturedProjectLinksContainer,
  FeaturedProjectExternalLink,
  FeaturedProjectTechStackText,
  FeaturedProjectThumbnailStrip,
  FeaturedProjectThumbnailStatic,
  ThumbnailFallbackContainer,
  ThumbnailFallbackTopBar,
  ThumbnailFallbackDot,
  ThumbnailFallbackContent,
  ThumbnailFallbackLine,
} from './styles'

interface FeaturedProjectCardComponentProps {
  elementRef: React.RefObject<HTMLElement>
  isVisible: boolean
}

export function FeaturedProjectCardComponent({ elementRef, isVisible }: FeaturedProjectCardComponentProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const allImages = [
    featuredProjectData.image,
    ...(featuredProjectData.images || []),
  ]

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const goToPrevious = () => {
    setLightboxIndex((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setLightboxIndex((prev) => Math.min(allImages.length - 1, prev + 1))
  }

  return (
    <>
      <FeaturedProjectCardWrapper ref={elementRef} isVisible={isVisible}>
        <FeaturedProjectTopSection>
          <FeaturedProjectTextContent>
            <div>
              <FeaturedProjectTitle variant='h3'>
                {featuredProjectData.title}
              </FeaturedProjectTitle>
              <FeaturedProjectSubtitle>
                {featuredProjectData.subtitle}
              </FeaturedProjectSubtitle>
            </div>

            <CaseStudyContentRow>
              <CaseStudySectionLabel>Problem</CaseStudySectionLabel>
              <CaseStudyDescriptionText
                dangerouslySetInnerHTML={{ __html: featuredProjectData.problem }}
              />
            </CaseStudyContentRow>

            <CaseStudyContentRow>
              <CaseStudySectionLabel>Solution</CaseStudySectionLabel>
              <CaseStudyDescriptionText
                dangerouslySetInnerHTML={{ __html: featuredProjectData.solution }}
              />
            </CaseStudyContentRow>

            <CaseStudyContentRow>
              <CaseStudySectionLabel>Result</CaseStudySectionLabel>
              <CaseStudyDescriptionText
                dangerouslySetInnerHTML={{ __html: featuredProjectData.result }}
              />
            </CaseStudyContentRow>
          </FeaturedProjectTextContent>

          <FeaturedProjectMockupContainer
            onClick={() => openLightbox(0)}
            sx={{ cursor: 'pointer' }}
          >
            <FeaturedProjectScreenshotImage
              src={featuredProjectData.image}
              alt={`${featuredProjectData.title} screenshot`}
              onError={handleImageErrorWithFallback}
            />
            <BrowserWindowMockupContainer sx={{ display: 'none' }}>
              <BrowserWindowTopBar>
                <BrowserWindowTrafficLightDot />
                <BrowserWindowTrafficLightDot />
                <BrowserWindowTrafficLightDot />
              </BrowserWindowTopBar>
              <BrowserWindowContentArea>
                <BrowserContentPlaceholderLine />
                <BrowserContentPlaceholderLine />
                <BrowserContentPlaceholderLine />
                <BrowserContentPlaceholderLine />
              </BrowserWindowContentArea>
            </BrowserWindowMockupContainer>
          </FeaturedProjectMockupContainer>
        </FeaturedProjectTopSection>

        {featuredProjectData.images && featuredProjectData.images.length > 0 && (
          <FeaturedProjectThumbnailStrip>
            {featuredProjectData.images.map((imagePath, imageIndex) => (
              <FeaturedProjectThumbnailStatic
                key={imageIndex}
                onClick={() => openLightbox(imageIndex + 1)}
                sx={{ cursor: 'pointer' }}
              >
                <img
                  src={imagePath}
                  alt={`${featuredProjectData.title} thumbnail ${imageIndex + 1}`}
                  onError={handleImageErrorWithFlexFallback}
                />
                <ThumbnailFallbackContainer sx={{ display: 'none' }}>
                  <ThumbnailFallbackTopBar>
                    <ThumbnailFallbackDot />
                    <ThumbnailFallbackDot />
                    <ThumbnailFallbackDot />
                  </ThumbnailFallbackTopBar>
                  <ThumbnailFallbackContent>
                    <ThumbnailFallbackLine />
                    <ThumbnailFallbackLine />
                  </ThumbnailFallbackContent>
                </ThumbnailFallbackContainer>
              </FeaturedProjectThumbnailStatic>
            ))}
          </FeaturedProjectThumbnailStrip>
        )}

        <FeaturedProjectStatsStrip>
          {featuredProjectData.stats.map((statData) => (
            <StatItemContainer key={statData.label}>
              <StatValueNumber>{statData.value}</StatValueNumber>
              <StatLabelText>{statData.label}</StatLabelText>
            </StatItemContainer>
          ))}
        </FeaturedProjectStatsStrip>

        <FeaturedProjectFooter>
          <FeaturedProjectLinksContainer>
            {featuredProjectData.links.map((linkData) => (
              <FeaturedProjectExternalLink
                key={linkData.type}
                href={linkData.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={getProjectLinkIconByType(linkData.type)}
                  aria-hidden='true'
                />
                {getProjectLinkLabelByType(linkData.type)}
              </FeaturedProjectExternalLink>
            ))}
          </FeaturedProjectLinksContainer>
          <FeaturedProjectTechStackText>
            {featuredProjectData.stack.join(' · ')}
          </FeaturedProjectTechStackText>
        </FeaturedProjectFooter>
      </FeaturedProjectCardWrapper>

      <ImageLightbox
        images={allImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  )
}
