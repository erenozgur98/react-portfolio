import { Box, Typography, styled } from '@mui/material'
import {
  fontFamilyMonospace,
  fontFamilySansSerif,
  fontFamilySerif,
  colors,
  containerMaxWidthDesktop,
  containerMaxWidthMobile,
} from '../../theme'

export interface AnimatedProps {
  isVisible: boolean
}

export const ServicesSectionWrapper = styled('section')(({ theme }) => ({
  padding: '96px 0',
  [theme.breakpoints.down('md')]: {
    padding: '64px 0',
  },
}))

export const ServicesContentContainer = styled(Box)(({ theme }) => ({
  width: containerMaxWidthDesktop,
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    width: containerMaxWidthMobile,
  },
}))

export const ServicesThreeColumnGrid = styled(Box)<AnimatedProps>(
  ({ theme, isVisible }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    border: `1px solid ${colors.borderLight}`,
    borderRadius: '12px',
    overflow: 'hidden',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  }),
)

export const ServiceOfferingCard = styled('article')(({ theme }) => ({
  padding: '32px',
  borderRight: `1px solid ${colors.borderLight}`,
  borderBottom: `1px solid ${colors.borderLight}`,
  background: colors.cardBackground,
  transition: 'background 0.2s ease',
  '&:hover': {
    background: colors.pillBackgroundHover,
  },
  '&:nth-of-type(3n)': {
    borderRight: 'none',
  },
  '&:nth-last-of-type(-n + 3)': {
    borderBottom: 'none',
  },
  [theme.breakpoints.down('md')]: {
    '&:nth-of-type(3n)': {
      borderRight: `1px solid ${colors.borderLight}`,
    },
    '&:nth-of-type(2n)': {
      borderRight: 'none',
    },
    '&:nth-last-of-type(-n + 3)': {
      borderBottom: `1px solid ${colors.borderLight}`,
    },
    '&:nth-last-of-type(-n + 2)': {
      borderBottom: 'none',
    },
  },
  [theme.breakpoints.down('sm')]: {
    borderRight: 'none !important',
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:not(:last-child)': {
      borderBottom: `1px solid ${colors.borderLight}`,
    },
  },
}))

export const ServiceIndexNumberLabel = styled('span')({
  fontFamily: fontFamilyMonospace,
  fontSize: '0.6875rem',
  color: colors.textTertiary,
  marginBottom: '16px',
  display: 'block',
  transition: 'color 0.2s ease',
  'article:hover &': {
    color: colors.accentGreen,
  },
})

export const ServiceCardTitle = styled(Typography)({
  fontFamily: fontFamilySansSerif,
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: '-0.015em',
  fontSize: '1.125rem',
  color: colors.textPrimary,
  marginBottom: '8px',
})

export const ServiceCardDescription = styled('p')({
  fontFamily: fontFamilySerif,
  fontSize: '0.9375rem',
  color: colors.textSecondary,
  margin: 0,
  lineHeight: 1.7,
})
