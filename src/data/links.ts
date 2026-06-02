import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines } from '@fortawesome/free-regular-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface SocialLink {
  href: string
  icon: IconDefinition
  label: string
  displayText?: string // For contact section where we show the URL
}

export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/erenozgur98',
    icon: faGithub,
    label: 'GitHub',
    displayText: 'github.com/erenozgur98',
  },
  {
    href: 'https://linkedin.com/in/yigit-eren-ozgur/',
    icon: faLinkedinIn,
    label: 'LinkedIn',
    displayText: 'linkedin.com/in/yigit-eren-ozgur',
  },
  {
    href: 'https://docs.google.com/document/d/15RRjtY9lOy9PZPcvcRgrS7AKtrmzav-G0PrCnHjnOzQ/edit?usp=sharing',
    icon: faFileLines,
    label: 'Resume',
    displayText: 'Resume',
  },
  {
    href: 'mailto:yigiterenozgur@outlook.com',
    icon: faEnvelope,
    label: 'Email',
    displayText: 'yigiterenozgur@outlook.com',
  },
]
