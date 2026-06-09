import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Project } from '../../data/projects'
import { handleImageErrorWithFallback } from '../../hooks/useImageFallback'
import {
  getProjectLinkIconByType,
  getProjectLinkLabelByType,
} from './projectLinkUtils'
import { ImageLightbox } from './ImageLightbox'
import {
  ProjectCardContainer,
  ProjectCardImageContainer,
  ProjectCardScreenshotImage,
  ProjectImageFallbackText,
  ProjectCardContentBody,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectTechStackBadgesContainer,
  TechStackBadge,
  ProjectLinksContainer,
  ProjectCardExternalLink,
} from './styles'

interface ProjectCardComponentProps {
  projectData: Project
}

export function ProjectCardComponent({
  projectData,
}: ProjectCardComponentProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const maybeItalicTextInDescriptions = () => {
    const description = projectData.description

    if (description.includes('.')) {
      const parts = description.split('.')
      return (
        <React.Fragment>
          <p>{parts[0]}</p>
          <em>{parts[1]}</em>
        </React.Fragment>
      )
    }
  }

  const allImages = [projectData.image, ...(projectData.images || [])]

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
      <ProjectCardContainer>
        <ProjectCardImageContainer
          onClick={() => openLightbox(0)}
          sx={{ cursor: 'pointer' }}
          isMobileApp={projectData.isMobileApp}
        >
          <ProjectCardScreenshotImage
            src={projectData.image}
            alt={`${projectData.title} screenshot`}
            onError={handleImageErrorWithFallback}
            isMobileApp={projectData.isMobileApp}
          />
          <ProjectImageFallbackText sx={{ display: 'none' }}>
            {projectData.image.split('/').pop()}
          </ProjectImageFallbackText>
        </ProjectCardImageContainer>
        <ProjectCardContentBody>
          <ProjectCardTitle variant='h4'>{projectData.title}</ProjectCardTitle>
          <ProjectCardDescription>
            {maybeItalicTextInDescriptions()}
          </ProjectCardDescription>
          <ProjectTechStackBadgesContainer>
            {projectData.stack.map((technologyName) => (
              <TechStackBadge key={technologyName}>
                {technologyName}
              </TechStackBadge>
            ))}
          </ProjectTechStackBadgesContainer>
          <ProjectLinksContainer>
            {projectData.links
              .filter((link) => link.url)
              .map((linkData) => (
                <ProjectCardExternalLink
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
                </ProjectCardExternalLink>
              ))}
          </ProjectLinksContainer>
        </ProjectCardContentBody>
      </ProjectCardContainer>

      <ImageLightbox
        images={allImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        isMobileApp={projectData.isMobileApp}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  )
}
