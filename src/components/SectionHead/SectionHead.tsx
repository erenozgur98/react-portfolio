import { ReactNode } from 'react'
import { useScrollAnimation } from '../../hooks'
import {
  SectionHeaderWrapper,
  SectionEyebrowLabel,
  SectionMainTitle,
} from './styles'

interface SectionHeadProps {
  eyebrow: string
  title: ReactNode
  titleId: string
}

export function SectionHead({ eyebrow, title, titleId }: SectionHeadProps) {
  const { elementRef, isVisible } = useScrollAnimation(0.3)

  return (
    <SectionHeaderWrapper
      ref={elementRef as React.RefObject<HTMLDivElement>}
      isVisible={isVisible}
    >
      <SectionEyebrowLabel>{eyebrow}</SectionEyebrowLabel>
      <SectionMainTitle variant='h2' id={titleId}>
        {title}
      </SectionMainTitle>
    </SectionHeaderWrapper>
  )
}
