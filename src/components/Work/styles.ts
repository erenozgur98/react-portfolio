import { Box, Typography, styled } from '@mui/material'
import {
  fontFamilyMonospace,
  fontFamilySansSerif,
  fontFamilySerif,
  colors,
} from '../../theme'
import { AnimatedSectionProps } from '../../types/styled'
import { SectionWrapper, SectionContentContainer } from '../../styles/SharedLayoutComponents'

export const WorkSectionWrapper = SectionWrapper

export const WorkContentContainer = SectionContentContainer

export const FeaturedProjectCardWrapper = styled('article')<AnimatedSectionProps>(({ isVisible }) => ({
  background: colors.cardBackground,
  border: `1px solid ${colors.borderLight}`,
  borderRadius: '12px',
  overflow: 'hidden',
  marginBottom: '48px',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
  transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
  },
}))

export const FeaturedProjectTopSection = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 0,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}))

export const FeaturedProjectTextContent = styled(Box)({
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})

export const FeaturedProjectTitle = styled(Typography)({
  fontFamily: fontFamilySansSerif,
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: '-0.02em',
  fontSize: '1.5rem',
  color: colors.textPrimary,
  marginBottom: '8px',
})

export const FeaturedProjectSubtitle = styled('p')({
  color: colors.textTertiary,
  fontSize: '0.9375rem',
  margin: 0,
  fontFamily: fontFamilySerif,
})

export const CaseStudyContentRow = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
})

export const CaseStudySectionLabel = styled('span')({
  fontFamily: fontFamilyMonospace,
  fontSize: '0.75rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: colors.textTertiary,
  marginBottom: '4px',
})

export const CaseStudyDescriptionText = styled('p')({
  color: colors.textSecondary,
  margin: 0,
  fontFamily: fontFamilySerif,
  fontSize: '17px',
  lineHeight: 1.7,
  '& strong': {
    color: colors.textPrimary,
    fontWeight: 600,
  },
})

export const FeaturedProjectMockupContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${colors.sectionBackgroundAlternate} 0%, rgba(111, 164, 142, 0.3) 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '32px',
  minHeight: '400px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    minHeight: '280px',
    padding: '24px',
  },
}))

export const FeaturedProjectScreenshotImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)',
  border: `1px solid ${colors.borderLight}`,
})

export const BrowserWindowMockupContainer = styled(Box)({
  width: '100%',
  maxWidth: '400px',
  background: colors.pageBackground,
  borderRadius: '8px',
  border: `1px solid ${colors.borderMedium}`,
  overflow: 'hidden',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
})

export const BrowserWindowTopBar = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '12px 16px',
  background: colors.cardBackground,
  borderBottom: `1px solid ${colors.borderLight}`,
})

export const BrowserWindowTrafficLightDot = styled(Box)({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: colors.borderMedium,
  '&:first-of-type': {
    background: colors.browserDotRed,
  },
  '&:nth-of-type(2)': {
    background: colors.browserDotYellow,
  },
  '&:nth-of-type(3)': {
    background: colors.browserDotGreen,
  },
})

export const BrowserWindowContentArea = styled(Box)({
  padding: '24px',
  minHeight: '180px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
})

export const BrowserContentPlaceholderLine = styled(Box)({
  height: '12px',
  background: colors.cardBackground,
  borderRadius: '4px',
  '&:nth-of-type(1)': { width: '60%' },
  '&:nth-of-type(2)': { width: '90%' },
  '&:nth-of-type(3)': { width: '75%' },
  '&:nth-of-type(4)': { width: '45%' },
})

export const FeaturedProjectStatsStrip = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  borderTop: `1px solid ${colors.borderLight}`,
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}))

export const StatItemContainer = styled(Box)(({ theme }) => ({
  padding: '24px',
  textAlign: 'center',
  borderRight: `1px solid ${colors.borderLight}`,
  '&:last-child': {
    borderRight: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    '&:nth-of-type(2)': {
      borderRight: 'none',
    },
    '&:nth-of-type(1), &:nth-of-type(2)': {
      borderBottom: `1px solid ${colors.borderLight}`,
    },
  },
}))

export const StatValueNumber = styled(Box)({
  fontFamily: fontFamilySansSerif,
  fontSize: '2rem',
  fontWeight: 600,
  color: colors.accentGreen,
  fontStyle: 'italic',
  letterSpacing: '-0.02em',
})

export const StatLabelText = styled(Box)({
  fontFamily: fontFamilyMonospace,
  fontSize: '0.6875rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: colors.textTertiary,
  marginTop: '4px',
})

export const FeaturedProjectFooter = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '16px',
  padding: '24px 40px',
  borderTop: `1px solid ${colors.borderLight}`,
})

export const FeaturedProjectLinksContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
})

export const FeaturedProjectExternalLink = styled('a')({
  fontFamily: fontFamilyMonospace,
  fontSize: '0.8125rem',
  color: colors.brandPrimary,
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  textDecoration: 'none',
  '&:hover': {
    color: colors.accentGreen,
  },
})

export const FeaturedProjectTechStackText = styled('span')({
  fontFamily: fontFamilyMonospace,
  fontSize: '0.75rem',
  color: colors.textTertiary,
})

export const FeaturedProjectThumbnailStrip = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '12px',
  padding: '16px 40px',
  borderTop: `1px solid ${colors.borderLight}`,
  background: colors.cardBackground,
  [theme.breakpoints.down('sm')]: {
    padding: '12px 24px',
    gap: '8px',
  },
}))

export const FeaturedProjectThumbnailStatic = styled(Box)({
  flex: 1,
  padding: 0,
  border: `1px solid ${colors.borderLight}`,
  borderRadius: '8px',
  overflow: 'hidden',
  background: 'transparent',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  '& img': {
    width: '100%',
    aspectRatio: '16 / 9',
    objectFit: 'cover',
    display: 'block',
  },
})

export const ThumbnailFallbackContainer = styled(Box)({
  width: '100%',
  aspectRatio: '16 / 9',
  background: colors.cardBackground,
  borderRadius: '4px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
})

export const ThumbnailFallbackTopBar = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '3px',
  padding: '5px 6px',
  background: colors.pillBackground,
  borderBottom: `1px solid ${colors.borderLight}`,
})

export const ThumbnailFallbackDot = styled(Box)({
  width: '5px',
  height: '5px',
  borderRadius: '50%',
  background: colors.borderMedium,
})

export const ThumbnailFallbackContent = styled(Box)({
  flex: 1,
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '6px',
})

export const ThumbnailFallbackLine = styled(Box)({
  height: '3px',
  background: colors.borderLight,
  borderRadius: '2px',
  '&:nth-of-type(1)': { width: '70%' },
  '&:nth-of-type(2)': { width: '50%' },
  '&:nth-of-type(3)': { width: '40%' },
})

export const ProjectsAndTestimonialsGrid = styled(Box)<AnimatedSectionProps>(({ theme, isVisible }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '24px',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
  transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}))

export const ProjectsGrid = styled(Box)<AnimatedSectionProps>(({ theme, isVisible }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '24px',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
  transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}))

export const ProjectsCarouselContainer = styled(Box)<AnimatedSectionProps>(({ isVisible }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
  transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
}))

export const ProjectsCarouselWrapper = styled(Box)({
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ProjectsCarouselInner = styled(Box)<{ slideDirection?: 'left' | 'right' | null }>(({ slideDirection }) => ({
  width: '100%',
  overflow: 'hidden',
  '& > article': {
    animation: slideDirection ? `slideIn${slideDirection === 'left' ? 'FromLeft' : 'FromRight'} 0.3s ease-out` : 'none',
  },
  '@keyframes slideInFromLeft': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-30px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  '@keyframes slideInFromRight': {
    '0%': {
      opacity: 0,
      transform: 'translateX(30px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
}))

export const CarouselNavButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: colors.cardBackground,
  border: `1px solid ${colors.borderLight}`,
  borderRadius: '50%',
  width: '44px',
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '1.25rem',
  color: colors.textPrimary,
  transition: 'all 0.2s ease',
  zIndex: 10,
  '&:hover': {
    background: colors.pillBackgroundHover,
    transform: 'translateY(-50%) scale(1.05)',
  },
  '&:disabled': {
    opacity: 0.3,
    cursor: 'not-allowed',
    '&:hover': {
      transform: 'translateY(-50%)',
    },
  },
  [theme.breakpoints.down('sm')]: {
    width: '36px',
    height: '36px',
    fontSize: '1rem',
  },
}))

export const CarouselPrevButton = styled(CarouselNavButton)({
  left: '-60px',
})

export const CarouselNextButton = styled(CarouselNavButton)({
  right: '-60px',
})

export const CarouselDots = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  marginTop: '20px',
})

export const CarouselDot = styled('button')<{ isActive: boolean }>(({ isActive }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  border: 'none',
  background: isActive ? colors.brandPrimary : colors.borderMedium,
  cursor: 'pointer',
  padding: 0,
  transition: 'all 0.2s ease',
  '&:hover': {
    background: isActive ? colors.brandPrimary : colors.borderLight,
  },
}))

export const ProjectCardContainer = styled('article')({
  background: colors.cardBackground,
  border: `1px solid ${colors.borderLight}`,
  borderRadius: '12px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
  },
})

export const ProjectCardImageContainer = styled(Box)<{ isMobileApp?: boolean }>(({ isMobileApp }) => ({
  background: `linear-gradient(135deg, ${colors.sectionBackgroundAlternate} 0%, rgba(111, 164, 142, 0.3) 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  minHeight: '420px',
}))

export const ProjectCardScreenshotImage = styled('img')<{ isMobileApp?: boolean }>(({ isMobileApp }) => ({
  width: '100%',
  height: 'auto',
  aspectRatio: '16 / 9',
  objectFit: 'cover',
  borderRadius: '4px',
  ...(isMobileApp && {
    width: 'auto',
    maxWidth: '180px',
    height: '380px',
    aspectRatio: 'auto',
    objectFit: 'contain',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
  }),
}))

export const ProjectImageFallbackText = styled('span')({
  fontFamily: fontFamilyMonospace,
  fontSize: '0.6875rem',
  color: colors.textTertiary,
  background: colors.pageBackground,
  padding: '8px 12px',
  borderRadius: '4px',
})

export const ProjectCardContentBody = styled(Box)({
  padding: '24px',
})

export const ProjectCardTitle = styled(Typography)({
  fontFamily: fontFamilySansSerif,
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: '-0.015em',
  fontSize: '1.125rem',
  color: colors.textPrimary,
  marginBottom: '8px',
})

export const ProjectCardDescription = styled('p')({
  color: colors.textSecondary,
  fontSize: '0.9375rem',
  marginBottom: '16px',
  fontFamily: fontFamilySerif,
  lineHeight: 1.7,
})

export const ProjectTechStackBadgesContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginBottom: '16px',
})

export const TechStackBadge = styled('span')({
  fontFamily: fontFamilyMonospace,
  fontSize: '0.6875rem',
  padding: '4px 10px',
  background: colors.techBadgeBackground,
  border: `1px solid ${colors.borderLight}`,
  borderRadius: '4px',
  color: colors.textTertiary,
})

export const ProjectLinksContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
})

export const ProjectCardExternalLink = styled('a')({
  fontFamily: fontFamilyMonospace,
  fontSize: '0.75rem',
  color: colors.brandPrimary,
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  textDecoration: 'none',
  '&:hover': {
    color: colors.accentGreen,
  },
})

export const TestimonialCardContainer = styled('article')({
  background: colors.cardBackground,
  border: `1px solid ${colors.borderLight}`,
  borderRadius: '12px',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
  },
})

export const TestimonialQuoteMark = styled('span')({
  fontFamily: fontFamilySerif,
  fontSize: '4rem',
  lineHeight: 1,
  color: colors.accentGreen,
  marginBottom: '-16px',
})

export const TestimonialQuoteText = styled('blockquote')({
  fontStyle: 'italic',
  fontWeight: 500,
  fontSize: '1.0625rem',
  lineHeight: 1.6,
  color: colors.textPrimary,
  flexGrow: 1,
  marginBottom: '24px',
  fontFamily: fontFamilySerif,
})

export const TestimonialCardFooter = styled('footer')({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  paddingTop: '16px',
  borderTop: `1px dashed ${colors.borderDashed}`,
})

export const TestimonialAuthorAvatar = styled(Box)({
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  background: colors.sectionBackgroundAlternate,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: fontFamilySansSerif,
  fontWeight: 600,
  fontSize: '0.875rem',
  color: colors.textTertiary,
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
})

export const TestimonialAuthorMetadata = styled(Box)({
  '& strong': {
    display: 'block',
    fontFamily: fontFamilySansSerif,
    fontWeight: 600,
    fontSize: '0.875rem',
    color: colors.textPrimary,
  },
  '& span': {
    fontFamily: fontFamilyMonospace,
    fontSize: '0.6875rem',
    color: colors.textTertiary,
  },
})
