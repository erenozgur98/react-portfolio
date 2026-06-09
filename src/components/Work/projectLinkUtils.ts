import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'

export function getProjectLinkIconByType(linkType: string) {
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

export function getProjectLinkLabelByType(linkType: string) {
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
