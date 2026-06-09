import { Box, Typography, styled } from '@mui/material'
import { fontFamilyMonospace, fontFamilySansSerif, colors } from '../../theme'
import { AnimatedSectionProps } from '../../types/styled'

export const SectionHeaderWrapper = styled(Box)<AnimatedSectionProps>(({ theme, isVisible }) => ({
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  gap: '24px',
  paddingBottom: '24px',
  marginBottom: '48px',
  borderBottom: `1px solid ${colors.borderLight}`,
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  transition: 'opacity 0.5s ease, transform 0.5s ease',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '12px',
    marginBottom: '32px',
  },
}))

export const SectionEyebrowLabel = styled('span')({
  fontFamily: fontFamilyMonospace,
  fontSize: '0.75rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: colors.textTertiary,
})

export const SectionMainTitle = styled(Typography)({
  fontFamily: fontFamilySansSerif,
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: '-0.035em',
  fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
  color: colors.textPrimary,
  '& em': {
    fontStyle: 'italic',
    color: colors.accentGreen,
  },
})
