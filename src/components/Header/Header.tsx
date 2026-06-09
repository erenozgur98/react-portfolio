import { useState, useEffect } from 'react'
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { fontFamilyMonospace, colors } from '../../theme'
import {
  HeaderAppBar,
  HeaderToolbarContainer,
  SiteWordmarkLink,
  DesktopNavigationContainer,
  NavLink,
} from './styles'

const navigationLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const theme = useTheme()
  const isMobileViewport = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map((link) => link.href.replace('#', ''))
      const scrollPosition = window.scrollY + 150
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if we're at the bottom of the page - activate last section
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection(sections[sections.length - 1])
        return
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          return
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const handleCloseMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <HeaderAppBar position='sticky' elevation={0}>
      <HeaderToolbarContainer>
        <SiteWordmarkLink href='#'>Eren Ozgur</SiteWordmarkLink>

        {isMobileViewport ? (
          <>
            <IconButton
              onClick={handleToggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              sx={{ color: colors.textPrimary }}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            <Drawer
              anchor='right'
              open={isMobileMenuOpen}
              onClose={handleCloseMobileMenu}
              slotProps={{
                paper: {
                  sx: {
                    width: '100%',
                    maxWidth: 300,
                    backgroundColor: colors.pageBackground,
                    pt: 8,
                  },
                },
              }}
            >
              <List>
                {navigationLinks.map((navigationItem) => {
                  const isActive = activeSection === navigationItem.href.replace('#', '')
                  return (
                    <ListItem key={navigationItem.href} disablePadding>
                      <ListItemButton
                        component='a'
                        href={navigationItem.href}
                        onClick={handleCloseMobileMenu}
                        sx={{
                          py: 2,
                          px: 3,
                          borderLeft: isActive ? `3px solid ${colors.accentGreen}` : '3px solid transparent',
                          backgroundColor: isActive ? colors.cardBackground : 'transparent',
                          '&:hover': {
                            backgroundColor: colors.cardBackground,
                          },
                        }}
                      >
                        <ListItemText
                          primary={navigationItem.label}
                          slotProps={{
                            primary: {
                              sx: {
                                fontFamily: fontFamilyMonospace,
                                fontSize: '1.125rem',
                                color: isActive ? colors.accentGreen : colors.textPrimary,
                              },
                            },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  )
                })}
              </List>
            </Drawer>
          </>
        ) : (
          <DesktopNavigationContainer>
            {navigationLinks.map((navigationItem) => (
              <NavLink
                key={navigationItem.href}
                href={navigationItem.href}
                isActive={activeSection === navigationItem.href.replace('#', '')}
              >
                {navigationItem.label}
              </NavLink>
            ))}
          </DesktopNavigationContainer>
        )}
      </HeaderToolbarContainer>
    </HeaderAppBar>
  )
}
