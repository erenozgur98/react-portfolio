import type { SyntheticEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { SectionHead } from '../SectionHead'
import { featuredProject, projects, testimonials } from '../../data/projects'
import type { Project, Testimonial } from '../../data/projects'
import { useScrollAnimation } from '../../hooks'
import {
  WorkSectionWrapper,
  WorkContentContainer,
  FeaturedProjectCard,
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
  ProjectsAndTestimonialsGrid,
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
  TestimonialCardContainer,
  TestimonialQuoteMark,
  TestimonialQuoteText,
  TestimonialCardFooter,
  TestimonialAuthorAvatar,
  TestimonialAuthorMetadata,
  ThumbnailFallbackContainer,
  ThumbnailFallbackTopBar,
  ThumbnailFallbackDot,
  ThumbnailFallbackContent,
  ThumbnailFallbackLine,
} from './styles'

function getProjectLinkIcon(linkType: string) {
  switch (linkType) {
    case 'github':
      return faGithub
    case 'npm':
      return faNpm
    case 'casestudy':
      return faFileLines
    default:
      return faArrowUpRightFromSquare
  }
}

function getProjectLinkLabel(linkType: string) {
  switch (linkType) {
    case 'github':
      return 'GitHub'
    case 'npm':
      return 'npm'
    case 'casestudy':
      return 'Case study'
    default:
      return 'Live'
  }
}

export function Work() {
  const { elementRef: featuredRef, isVisible: featuredVisible } =
    useScrollAnimation(0.2)
  const { elementRef: gridRef, isVisible: gridVisible } =
    useScrollAnimation(0.1)

  const projectsAndTestimonialsGridItems: Array<{
    itemType: 'project' | 'testimonial'
    itemData: Project | Testimonial
  }> = []
  const maximumItemsLength = Math.max(projects.length, testimonials.length)

  for (let itemIndex = 0; itemIndex < maximumItemsLength; itemIndex++) {
    if (projects[itemIndex]) {
      projectsAndTestimonialsGridItems.push({
        itemType: 'project',
        itemData: projects[itemIndex],
      })
    }
    if (testimonials[itemIndex]) {
      projectsAndTestimonialsGridItems.push({
        itemType: 'testimonial',
        itemData: testimonials[itemIndex],
      })
    }
  }

  return (
    <WorkSectionWrapper id='work' aria-labelledby='work-heading'>
      <WorkContentContainer>
        <SectionHead
          eyebrow='Work'
          title={
            <>
              A few things <em>I've built</em>
            </>
          }
          titleId='work-heading'
        />

        <FeaturedProjectCard
          ref={featuredRef as React.RefObject<HTMLElement>}
          isVisible={featuredVisible}
        >
          <FeaturedProjectTopSection>
            <FeaturedProjectTextContent>
              <div>
                <FeaturedProjectTitle variant='h3'>
                  {featuredProject.title}
                </FeaturedProjectTitle>
                <FeaturedProjectSubtitle>
                  {featuredProject.subtitle}
                </FeaturedProjectSubtitle>
              </div>

              <CaseStudyContentRow>
                <CaseStudySectionLabel>Problem</CaseStudySectionLabel>
                <CaseStudyDescriptionText
                  dangerouslySetInnerHTML={{ __html: featuredProject.problem }}
                />
              </CaseStudyContentRow>

              <CaseStudyContentRow>
                <CaseStudySectionLabel>Solution</CaseStudySectionLabel>
                <CaseStudyDescriptionText
                  dangerouslySetInnerHTML={{ __html: featuredProject.solution }}
                />
              </CaseStudyContentRow>

              <CaseStudyContentRow>
                <CaseStudySectionLabel>Result</CaseStudySectionLabel>
                <CaseStudyDescriptionText
                  dangerouslySetInnerHTML={{ __html: featuredProject.result }}
                />
              </CaseStudyContentRow>
            </FeaturedProjectTextContent>

            <FeaturedProjectMockupContainer>
              <FeaturedProjectScreenshotImage
                src={featuredProject.image}
                alt={`${featuredProject.title} screenshot`}
                onError={(event: SyntheticEvent<HTMLImageElement>) => {
                  const imageElement = event.currentTarget
                  imageElement.style.display = 'none'
                  const fallbackElement =
                    imageElement.nextElementSibling as HTMLElement
                  if (fallbackElement) fallbackElement.style.display = 'block'
                }}
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

          {featuredProject.images && featuredProject.images.length > 1 && (
            <FeaturedProjectThumbnailStrip>
              {featuredProject.images.map((image, index) => (
                <FeaturedProjectThumbnailStatic key={index}>
                  <img
                    src={image}
                    alt={`${featuredProject.title} thumbnail ${index + 1}`}
                    onError={(event: SyntheticEvent<HTMLImageElement>) => {
                      event.currentTarget.style.display = 'none'
                      const fallback = event.currentTarget
                        .nextElementSibling as HTMLElement
                      if (fallback) fallback.style.display = 'flex'
                    }}
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
            {featuredProject.stats.map((statItem) => (
              <StatItemContainer key={statItem.label}>
                <StatValueNumber>{statItem.value}</StatValueNumber>
                <StatLabelText>{statItem.label}</StatLabelText>
              </StatItemContainer>
            ))}
          </FeaturedProjectStatsStrip>

          <FeaturedProjectFooter>
            <FeaturedProjectLinksContainer>
              {featuredProject.links.map((projectLink) => (
                <FeaturedProjectExternalLink
                  key={projectLink.type}
                  href={projectLink.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon
                    icon={getProjectLinkIcon(projectLink.type)}
                    aria-hidden='true'
                  />
                  {getProjectLinkLabel(projectLink.type)}
                </FeaturedProjectExternalLink>
              ))}
            </FeaturedProjectLinksContainer>
            <FeaturedProjectTechStackText>
              {featuredProject.stack.join(' · ')}
            </FeaturedProjectTechStackText>
          </FeaturedProjectFooter>
        </FeaturedProjectCard>

        <ProjectsAndTestimonialsGrid
          ref={gridRef as React.RefObject<HTMLDivElement>}
          isVisible={gridVisible}
        >
          {projectsAndTestimonialsGridItems.map((gridItem) => {
            if (gridItem.itemType === 'project') {
              const projectData = gridItem.itemData as Project
              return (
                <ProjectCardContainer key={projectData.id}>
                  <ProjectCardImageContainer>
                    <ProjectCardScreenshotImage
                      src={projectData.image}
                      alt={`${projectData.title} screenshot`}
                      onError={(event: SyntheticEvent<HTMLImageElement>) => {
                        const imageElement = event.currentTarget
                        imageElement.style.display = 'none'
                        const fallbackElement =
                          imageElement.nextElementSibling as HTMLElement
                        if (fallbackElement)
                          fallbackElement.style.display = 'block'
                      }}
                    />
                    <ProjectImageFallbackText sx={{ display: 'none' }}>
                      {projectData.image.split('/').pop()}
                    </ProjectImageFallbackText>
                  </ProjectCardImageContainer>
                  <ProjectCardContentBody>
                    <ProjectCardTitle variant='h4'>
                      {projectData.title}
                    </ProjectCardTitle>
                    <ProjectCardDescription>
                      {projectData.description}
                    </ProjectCardDescription>
                    <ProjectTechStackBadgesContainer>
                      {projectData.stack.map((technologyName) => (
                        <TechStackBadge key={technologyName}>
                          {technologyName}
                        </TechStackBadge>
                      ))}
                    </ProjectTechStackBadgesContainer>
                    <ProjectLinksContainer>
                      {projectData.links.map((projectLink) => (
                        <ProjectCardExternalLink
                          key={projectLink.type}
                          href={projectLink.url}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <FontAwesomeIcon
                            icon={getProjectLinkIcon(projectLink.type)}
                            aria-hidden='true'
                          />
                          {getProjectLinkLabel(projectLink.type)}
                        </ProjectCardExternalLink>
                      ))}
                    </ProjectLinksContainer>
                  </ProjectCardContentBody>
                </ProjectCardContainer>
              )
            } else {
              const testimonialData = gridItem.itemData as Testimonial
              return (
                <TestimonialCardContainer key={testimonialData.id}>
                  <TestimonialQuoteMark aria-hidden='true'>
                    "
                  </TestimonialQuoteMark>
                  <TestimonialQuoteText>
                    {testimonialData.quote}
                  </TestimonialQuoteText>
                  <TestimonialCardFooter>
                    <TestimonialAuthorAvatar>
                      {testimonialData.avatar ? (
                        <img
                          src={testimonialData.avatar}
                          alt={testimonialData.name}
                        />
                      ) : (
                        testimonialData.initials
                      )}
                    </TestimonialAuthorAvatar>
                    <TestimonialAuthorMetadata>
                      <strong>{testimonialData.name}</strong>
                      <span>{testimonialData.role}</span>
                    </TestimonialAuthorMetadata>
                  </TestimonialCardFooter>
                </TestimonialCardContainer>
              )
            }
          })}
        </ProjectsAndTestimonialsGrid>
      </WorkContentContainer>
    </WorkSectionWrapper>
  )
}
