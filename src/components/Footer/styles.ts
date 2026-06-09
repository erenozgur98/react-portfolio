import { Box, styled } from '@mui/material'
import {
  fontFamilyMonospace,
  colors,
  containerMaxWidthDesktop,
  containerMaxWidthMobile,
} from '../../theme'
import { AnimatedSectionProps } from '../../types/styled'

export const FooterSection = styled('footer')({
  background: colors.sectionBackgroundAlternate,
  borderTop: `1px solid ${colors.borderLight}`,
  padding: '32px 0',
})

export const FooterContentContainer = styled(Box)<AnimatedSectionProps>(({ theme, isVisible }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '16px',
  width: containerMaxWidthDesktop,
  margin: '0 auto',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity 0.5s ease, transform 0.5s ease',
  [theme.breakpoints.down('sm')]: {
    width: containerMaxWidthMobile,
  },
}))

export const FooterCopyrightText = styled('span')({
  fontFamily: fontFamilyMonospace,
  fontSize: '0.75rem',
  color: colors.textTertiary,
})

export const FooterNavigationLinksContainer = styled('nav')({
  display: 'flex',
  gap: '24px',
  '& a': {
    fontFamily: fontFamilyMonospace,
    fontSize: '0.75rem',
    color: colors.textTertiary,
    textDecoration: 'none',
    transition: 'color 0.2s ease, transform 0.2s ease',
    '&:hover': {
      color: colors.textPrimary,
    },
  },
})
