import { SectionHead } from '../SectionHead'
import { projectsData } from '../../data/projects'
import { useScrollAnimation } from '../../hooks'
import { FeaturedProjectCardComponent } from './FeaturedProjectCard'
import { ProjectCardComponent } from './ProjectCard'
import {
  WorkSectionWrapper,
  WorkContentContainer,
  ProjectsGrid,
} from './styles'

export function Work() {
  const { elementRef: featuredRef, isVisible: featuredVisible } =
    useScrollAnimation(0.2)
  const { elementRef: gridRef, isVisible: gridVisible } =
    useScrollAnimation(0.1)

  return (
    <WorkSectionWrapper id='work' aria-labelledby='work-heading'>
      <WorkContentContainer>
        <SectionHead
          eyebrow='Work'
          title={
            <>
              <em>I've built</em>
            </>
          }
          titleId='work-heading'
        />

        <FeaturedProjectCardComponent
          elementRef={featuredRef as React.RefObject<HTMLElement>}
          isVisible={featuredVisible}
        />

        {projectsData.length > 0 && (
          <ProjectsGrid
            ref={gridRef as React.RefObject<HTMLDivElement>}
            isVisible={gridVisible}
          >
            {projectsData.map((project) => (
              <ProjectCardComponent
                key={project.id}
                projectData={project}
              />
            ))}
          </ProjectsGrid>
        )}
      </WorkContentContainer>
    </WorkSectionWrapper>
  )
}
