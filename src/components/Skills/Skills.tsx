import { SectionHead } from '../SectionHead'
import { useScrollAnimation } from '../../hooks'
import {
  SkillsSectionWrapper,
  SkillsContentContainer,
  SkillCategoriesThreeColumnGrid,
  SkillCategoryContainer,
  SkillCategoryTitle,
  SkillCategorySubtitle,
  SkillItemsList,
  SkillItemRow,
  SkillProficiencyLevelLabel,
} from './styles'

interface SkillCategoryData {
  categoryTitle: string
  categorySubtitle: string
  skillsList: {
    skillName: string
    proficiencyLevel: string
  }[]
}

const skillCategoriesData: SkillCategoryData[] = [
  {
    categoryTitle: 'Frontend',
    categorySubtitle: 'Core expertise',
    skillsList: [
      { skillName: 'React', proficiencyLevel: 'Expert' },
      { skillName: 'TypeScript', proficiencyLevel: 'Expert' },
      { skillName: 'CSS', proficiencyLevel: 'Expert' },
      { skillName: 'Animation (Framer Motion)', proficiencyLevel: 'Familiar' },
    ],
  },
  {
    categoryTitle: 'Backend & Data',
    categorySubtitle: 'Supporting skills',
    skillsList: [
      { skillName: 'Node.js', proficiencyLevel: 'Familiar' },
      { skillName: 'MySQL', proficiencyLevel: 'Proficient' },
      { skillName: 'Azure SQL', proficiencyLevel: 'Proficient' },
      { skillName: 'REST', proficiencyLevel: 'Advanced' },
      { skillName: 'C# / .NET10', proficiencyLevel: 'Familiar' },
    ],
  },
  {
    categoryTitle: 'Tools & DevOps',
    categorySubtitle: 'Workflow & infra',
    skillsList: [
      { skillName: 'Git / GitHub', proficiencyLevel: 'Expert' },
      { skillName: 'CI/CD (GitHub Actions)', proficiencyLevel: 'Advanced' },
      { skillName: 'Figma', proficiencyLevel: 'Familiar' },
      { skillName: 'Azure DevOps', proficiencyLevel: 'Advanced' },
    ],
  },
]

export function Skills() {
  const { elementRef, isVisible } = useScrollAnimation(0.2)

  return (
    <SkillsSectionWrapper
      id='skills'
      aria-labelledby='skills-heading'
      ref={elementRef as React.RefObject<HTMLElement>}
    >
      <SkillsContentContainer>
        <SectionHead
          eyebrow='Skills'
          title={
            <>
              What's in <em>the toolbox</em>
            </>
          }
          titleId='skills-heading'
        />

        <SkillCategoriesThreeColumnGrid>
          {skillCategoriesData.map((skillCategory, index) => (
            <SkillCategoryContainer
              key={skillCategory.categoryTitle}
              isVisible={isVisible}
              delay={index * 0.15}
            >
              <SkillCategoryTitle variant='h3'>
                {skillCategory.categoryTitle}
              </SkillCategoryTitle>
              <SkillCategorySubtitle>
                {skillCategory.categorySubtitle}
              </SkillCategorySubtitle>
              <SkillItemsList>
                {skillCategory.skillsList.map((skillItem) => (
                  <SkillItemRow key={skillItem.skillName}>
                    {skillItem.skillName}
                    <SkillProficiencyLevelLabel>
                      {skillItem.proficiencyLevel}
                    </SkillProficiencyLevelLabel>
                  </SkillItemRow>
                ))}
              </SkillItemsList>
            </SkillCategoryContainer>
          ))}
        </SkillCategoriesThreeColumnGrid>
      </SkillsContentContainer>
    </SkillsSectionWrapper>
  )
}
