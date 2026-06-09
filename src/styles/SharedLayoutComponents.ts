import { Box, styled } from '@mui/material'
import { containerMaxWidthDesktop, containerMaxWidthMobile } from '../theme'

export const SectionWrapper = styled('section')(({ theme }) => ({
  padding: '96px 0',
  [theme.breakpoints.down('md')]: {
    padding: '64px 0',
  },
}))

export const SectionContentContainer = styled(Box)(({ theme }) => ({
  width: containerMaxWidthDesktop,
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    width: containerMaxWidthMobile,
  },
}))
