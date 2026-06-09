import { SectionHead } from '../SectionHead'
import { useScrollAnimation } from '../../hooks'
import {
  ServicesSectionWrapper,
  ServicesContentContainer,
  ServicesThreeColumnGrid,
  ServiceOfferingCard,
  ServiceCardTitle,
  ServiceCardDescription,
} from './styles'

interface ServiceOfferingData {
  serviceTitle: string
  serviceDescription: string
}

const serviceOfferingsData: ServiceOfferingData[] = [
  {
    serviceTitle: 'Business websites',
    serviceDescription:
      'Clean, fast websites for small businesses and startups that look great and actually bring in customers.',
  },
  {
    serviceTitle: 'Web applications',
    serviceDescription:
      'Full stack apps built end to end, from the UI all the way to the API and database.',
  },
  {
    serviceTitle: 'Mobile apps',
    serviceDescription:
      'Cross platform mobile apps using React Native that work great on both iOS and Android.',
  },
  {
    serviceTitle: 'Frontend development',
    serviceDescription:
      'React and TypeScript work, whether that is building from scratch, improving what you have, or jumping into an existing codebase.',
  },
  {
    serviceTitle: 'API and backend development',
    serviceDescription:
      'Solid backend work including REST APIs, system design, and making sure everything connects the way it should.',
  },
  {
    serviceTitle: 'Consulting and code review',
    serviceDescription:
      'Need a second pair of eyes? I can review your codebase, help with architecture decisions, or just get you unstuck.',
  },
]

export function Services() {
  const { elementRef, isVisible } = useScrollAnimation(0.2)

  return (
    <ServicesSectionWrapper
      id='services'
      aria-labelledby='services-heading'
      ref={elementRef as React.RefObject<HTMLElement>}
    >
      <ServicesContentContainer>
        <SectionHead
          eyebrow='Services'
          title={
            <>
              <em>Working on</em>
            </>
          }
          titleId='services-heading'
        />

        <ServicesThreeColumnGrid isVisible={isVisible}>
          {serviceOfferingsData.map((serviceOffering) => (
            <ServiceOfferingCard key={serviceOffering.serviceTitle}>
              <ServiceCardTitle variant='h3'>
                {serviceOffering.serviceTitle}
              </ServiceCardTitle>
              <ServiceCardDescription>
                {serviceOffering.serviceDescription}
              </ServiceCardDescription>
            </ServiceOfferingCard>
          ))}
        </ServicesThreeColumnGrid>
      </ServicesContentContainer>
    </ServicesSectionWrapper>
  )
}
