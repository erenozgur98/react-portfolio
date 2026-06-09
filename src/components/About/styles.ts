import { Box, Typography, styled } from '@mui/material'
import {
  fontFamilyMonospace,
  fontFamilySerif,
  colors,
} from '../../theme'
import { AnimatedSectionProps } from '../../types/styled'
import { SectionWrapper, SectionContentContainer } from '../../styles/SharedLayoutComponents'

export const AboutSectionWrapper = SectionWrapper

export const AboutContentContainer = SectionContentContainer

export const AboutTwoColumnGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '360px 1fr',
  gap: '48px',
  alignItems: 'start',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '32px',
  },
}))

export const ProfileHeadshotImage = styled('img')<AnimatedSectionProps>(({ isVisible }) => ({
  width: '100%',
  aspectRatio: '4 / 5',
  objectFit: 'cover',
  borderRadius: '8px',
  border: `1px solid ${colors.borderLight}`,
  filter: 'brightness(0.82)',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
  transition: 'opacity 0.6s ease, transform 0.6s ease',
}))

export const BiographyContentContainer = styled(Box)<AnimatedSectionProps>(
  ({ isVisible }) => ({
    '& p': {
      color: colors.textSecondary,
      marginBottom: '1rem',
      fontFamily: fontFamilySerif,
      fontSize: '17px',
      lineHeight: 1.7,
    },
    '& p:last-of-type': {
      marginBottom: 0,
    },
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
    transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
  }),
)

export const BiographyLeadParagraph = styled(Typography)({
  fontStyle: 'italic',
  fontWeight: 500,
  fontSize: '1.25rem',
  lineHeight: 1.6,
  color: colors.textPrimary,
  marginBottom: '24px',
  fontFamily: fontFamilySerif,
})

export const SocialLinksContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  marginTop: '32px',
})

export const SocialMediaLinkPill = styled('a')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 16px',
  fontFamily: fontFamilyMonospace,
  fontSize: '0.8125rem',
  color: colors.textSecondary,
  background: colors.pillBackground,
  border: `1px solid ${colors.borderLight}`,
  borderRadius: '100px',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: colors.textPrimary,
    borderColor: colors.brandPrimary,
    background: colors.pillBackgroundHover,
    transform: 'translateY(-2px)',
  },
})
