import { AppBar, Toolbar, styled } from '@mui/material'
import {
  fontFamilyMonospace,
  colors,
  containerMaxWidthDesktop,
  containerMaxWidthMobile,
} from '../../theme'

export interface NavLinkProps {
  isActive: boolean
}

export const HeaderAppBar = styled(AppBar)({
  backgroundColor: colors.headerBackgroundWithTransparency,
  backdropFilter: 'blur(12px)',
  borderBottom: `1px solid ${colors.borderLight}`,
})

export const HeaderToolbarContainer = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  minHeight: '64px !important',
  width: containerMaxWidthDesktop,
  margin: '0 auto',
  padding: '0 !important',
  [theme.breakpoints.down('sm')]: {
    width: containerMaxWidthMobile,
  },
}))

export const SiteWordmarkLink = styled('a')({
  fontFamily: fontFamilyMonospace,
  fontSize: '0.9375rem',
  fontWeight: 500,
  color: colors.textPrimary,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: colors.brandPrimary,
  },
})

export const DesktopNavigationContainer = styled('nav')({
  display: 'flex',
  gap: '32px',
})

export const NavLink = styled('a')<NavLinkProps>(({ isActive }) => ({
  fontFamily: fontFamilyMonospace,
  fontSize: '0.8125rem',
  color: isActive ? colors.textPrimary : colors.textSecondary,
  textDecoration: 'none',
  position: 'relative',
  paddingBottom: '4px',
  transition: 'color 0.2s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    left: 0,
    width: isActive ? '100%' : '0%',
    height: '2px',
    backgroundColor: colors.accentGreen,
    transition: 'width 0.3s ease',
  },
  '&:hover': {
    color: colors.textPrimary,
    '&::after': {
      width: '100%',
    },
  },
}))
