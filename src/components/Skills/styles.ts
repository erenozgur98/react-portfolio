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
  delay?: number
}

export const SkillsSectionWrapper = styled('section')(({ theme }) => ({
  padding: '96px 0',
  [theme.breakpoints.down('md')]: {
    padding: '64px 0',
  },
}))

export const SkillsContentContainer = styled(Box)(({ theme }) => ({
  width: containerMaxWidthDesktop,
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    width: containerMaxWidthMobile,
  },
}))

export const SkillCategoriesThreeColumnGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '48px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '40px',
  },
}))

export const SkillCategoryContainer = styled(Box)<AnimatedProps>(
  ({ isVisible, delay = 0 }) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  }),
)

export const SkillCategoryTitle = styled(Typography)({
  fontFamily: fontFamilySansSerif,
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: '-0.02em',
  fontSize: '1.375rem',
  color: colors.textPrimary,
  marginBottom: '4px',
})

export const SkillCategorySubtitle = styled('span')({
  fontFamily: fontFamilyMonospace,
  fontSize: '0.75rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: colors.textTertiary,
  marginBottom: '20px',
  display: 'block',
})

export const SkillItemsList = styled('ul')({
  listStyle: 'none',
})

export const SkillItemRow = styled('li')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  padding: '12px 0',
  borderBottom: `1px dashed ${colors.borderDashed}`,
  fontFamily: fontFamilySerif,
  fontSize: '0.9375rem',
  color: colors.textSecondary,
  transition: 'color 0.2s ease, padding-left 0.2s ease',
  '&:last-child': {
    borderBottom: 'none',
  },
  '&:hover': {
    color: colors.textPrimary,
    paddingLeft: '8px',
  },
})

export const SkillProficiencyLevelLabel = styled('span')({
  fontFamily: fontFamilyMonospace,
  fontSize: '0.6875rem',
  color: colors.textTertiary,
  textTransform: 'uppercase',
})
