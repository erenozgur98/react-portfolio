import { Box, Typography, Button, styled } from '@mui/material'
import {
  fontFamilyMonospace,
  fontFamilySerif,
  colors,
} from '../../theme'
import { AnimatedSectionProps } from '../../types/styled'
import { SectionWrapper, SectionContentContainer } from '../../styles/SharedLayoutComponents'

export const ContactSectionWrapper = SectionWrapper

export const ContactContentContainer = SectionContentContainer

export const ContactTwoColumnGrid = styled(Box)<AnimatedSectionProps>(({ theme, isVisible }) => ({
  // display: 'grid',
  // gridTemplateColumns: '1fr 1fr',
  // gap: '48px',
  // alignItems: 'start',
  // opacity: isVisible ? 1 : 0,
  // transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
  // transition: 'opacity 0.6s ease, transform 0.6s ease',
  // [theme.breakpoints.down('md')]: {
  //   gridTemplateColumns: '1fr',
  //   gap: '40px',
  // },
}))

export const ContactInfoColumn = styled(Box)({
  '& > p': {
    color: colors.textSecondary,
    marginBottom: '32px',
    fontFamily: fontFamilySerif,
    fontSize: '17px',
    lineHeight: 1.7,
  },
})

export const ContactMethodLinksList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
})

export const ContactMethodLinkItem = styled('a')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '16px 0',
  borderBottom: `1px solid ${colors.borderLight}`,
  textDecoration: 'none',
  color: colors.textSecondary,
  transition: 'all 0.2s ease',
  '&:last-child': {
    borderBottom: 'none',
  },
  '&:hover': {
    color: colors.textPrimary,
    '& .contact-link-arrow-indicator': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
})

export const ContactMethodIconBox = styled('span')({
  width: '44px',
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: colors.pillBackground,
  border: `1px solid ${colors.borderLight}`,
  borderRadius: '8px',
  color: colors.textTertiary,
  flexShrink: 0,
})

export const ContactMethodLinkText = styled('span')({
  flexGrow: 1,
  fontFamily: fontFamilyMonospace,
  fontSize: '0.875rem',
})

export const ContactLinkArrowIndicator = styled('span')({
  fontSize: '0.875rem',
  color: colors.brandPrimary,
  opacity: 0,
  transform: 'translateX(-8px)',
  transition: 'all 0.2s ease',
})

export const ContactFormCard = styled(Box)({
  background: colors.cardBackground,
  border: `1px solid ${colors.borderLight}`,
  borderRadius: '12px',
  padding: '32px',
})

export const FormFieldGroup = styled(Box)({
  marginBottom: '20px',
})

export const FormFieldLabel = styled('label')({
  display: 'block',
  fontFamily: fontFamilyMonospace,
  fontSize: '0.6875rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: colors.textTertiary,
  marginBottom: '8px',
})

const formInputBaseStyles = {
  width: '100%',
  padding: '12px 16px',
  fontFamily: fontFamilySerif,
  fontSize: '1rem',
  color: colors.textPrimary,
  background: colors.inputBackground,
  border: `1px solid ${colors.borderLight}`,
  borderRadius: '8px',
  transition: 'all 0.2s ease',
  '&:focus': {
    outline: 'none',
    borderColor: colors.brandPrimary,
    boxShadow: '0 0 0 3px rgba(104, 90, 72, 0.15)',
  },
  '&::placeholder': {
    color: colors.textMuted,
  },
}

export const FormTextInput = styled('input')(formInputBaseStyles)

export const FormTextareaInput = styled('textarea')({
  ...formInputBaseStyles,
  resize: 'vertical',
  minHeight: '120px',
})

export const FormSubmitButton = styled(Button)({
  width: '100%',
  padding: '14px 24px',
  fontFamily: fontFamilyMonospace,
  fontSize: '0.875rem',
  fontWeight: 500,
  color: colors.white,
  background: colors.brandPrimary,
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  textTransform: 'none',
  '&:hover': {
    background: colors.brandPrimaryHover,
  },
  '&:focus-visible': {
    outline: `2px solid ${colors.brandPrimary}`,
    outlineOffset: '2px',
  },
})

export const FormSubmissionStatusMessage = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isStatusVisible',
})<{ isStatusVisible: boolean }>(({ isStatusVisible }) => ({
  marginTop: '16px',
  fontFamily: fontFamilyMonospace,
  fontSize: '0.8125rem',
  color: colors.accentGreen,
  opacity: isStatusVisible ? 1 : 0,
  transition: 'opacity 0.2s ease',
}))
