import { useScrollAnimation } from '../../hooks'
import {
  FooterSection,
  FooterContentContainer,
  FooterCopyrightText,
  FooterNavigationLinksContainer,
} from './styles'

const footerNavigationLinks = [
  { href: 'mailto:yigiterenozgur@outlook.com', label: 'Email' },
  { href: 'https://github.com/erenozgur98', label: 'GitHub' },
  { href: 'https://linkedin.com/in/yigit-eren-ozgur/', label: 'LinkedIn' },
  { href: '#', label: '↑ Top' },
]

export function Footer() {
  const { elementRef, isVisible } = useScrollAnimation(0.5)

  const handleScrollToTopClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (event.currentTarget.getAttribute('href') === '#') {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <FooterSection role='contentinfo' ref={elementRef as React.RefObject<HTMLElement>}>
      <FooterContentContainer isVisible={isVisible}>
        <FooterCopyrightText>
          © 2026 Eren Ozgur · Made with care in Charlotte, NC
        </FooterCopyrightText>

        <FooterNavigationLinksContainer aria-label='Footer navigation'>
          {footerNavigationLinks.map((footerLink) => {
            const isExternalLink = footerLink.href.startsWith('http')
            return (
              <a
                key={footerLink.label}
                href={footerLink.href}
                onClick={
                  footerLink.href === '#'
                    ? handleScrollToTopClick
                    : undefined
                }
                target={isExternalLink ? '_blank' : undefined}
                rel={isExternalLink ? 'noopener noreferrer' : undefined}
              >
                {footerLink.label}
              </a>
            )
          })}
        </FooterNavigationLinksContainer>
      </FooterContentContainer>
    </FooterSection>
  )
}
