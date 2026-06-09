import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SectionHead } from '../SectionHead'
import { socialLinksData } from '../../data/links'
import { useScrollAnimation } from '../../hooks'
import {
  AboutSectionWrapper,
  AboutContentContainer,
  AboutTwoColumnGrid,
  ProfileHeadshotImage,
  BiographyContentContainer,
  BiographyLeadParagraph,
  SocialLinksContainer,
  SocialMediaLinkPill,
} from './styles'

export function About() {
  const { elementRef, isVisible } = useScrollAnimation(0.2)

  return (
    <AboutSectionWrapper
      id='about'
      aria-labelledby='about-heading'
      ref={elementRef as React.RefObject<HTMLElement>}
    >
      <AboutContentContainer>
        <SectionHead
          eyebrow='About'
          title={
            <>
              <em>Introduction</em>
            </>
          }
          titleId='about-heading'
        />

        <AboutTwoColumnGrid>
          <ProfileHeadshotImage
            src='/images/headshot/headshot.jpeg'
            alt='Eren Ozgur'
            isVisible={isVisible}
          />

          <BiographyContentContainer isVisible={isVisible}>
            <BiographyLeadParagraph>
              Hey, I'm Eren. I build websites and apps that people actually
              enjoy using.
            </BiographyLeadParagraph>

            <p>
              I'm a full stack engineer who loves building things end to end. My
              sweet spot is on the frontend with React and TypeScript, but I'm
              just as comfortable jumping into the backend, designing APIs,
              architecting systems, or wiring up the pieces that make everything
              work together.
            </p>

            <p>
              Outside of work... I mountain bike, hike, swim, play drums, geek
              out over airplanes, follow my investments, and somehow still find
              time to work on side projects. I just really can't sit still. You
              can check out some of those projects below.
            </p>

            <SocialLinksContainer>
              {socialLinksData.map((socialLinkItem) => (
                <SocialMediaLinkPill
                  key={socialLinkItem.label}
                  href={socialLinkItem.href}
                  aria-label={`${socialLinkItem.label} profile`}
                  target={
                    socialLinkItem.href.startsWith('mailto:')
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    socialLinkItem.href.startsWith('mailto:')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                >
                  <FontAwesomeIcon
                    icon={socialLinkItem.icon}
                    aria-hidden='true'
                  />
                  {socialLinkItem.label}
                </SocialMediaLinkPill>
              ))}
            </SocialLinksContainer>
          </BiographyContentContainer>
        </AboutTwoColumnGrid>
      </AboutContentContainer>
    </AboutSectionWrapper>
  )
}
