import { createTheme } from '@mui/material/styles'

export const colors = {
  pageBackground: '#FAF9F7',
  sectionBackgroundAlternate: '#F5F3F0',
  cardBackground: '#F0EDEA',
  inputBackground: '#FFFFFF',
  headerBackgroundWithTransparency: 'rgba(250, 249, 247, 0.85)',

  borderLight: '#DEDBD7',
  borderMedium: '#C5BFBA',
  borderDashed: '#D5D2CE',

  textPrimary: '#282420',
  textSecondary: '#57514A',
  textTertiary: '#7D766E',
  textMuted: '#9A948D',

  brandPrimary: '#685A48',
  brandPrimaryHover: '#57493A',
  accentGreen: '#6FA48E',
  accentGreenDark: '#5A8F79',

  pillBackground: '#F8F6F4',
  pillBackgroundHover: '#EEEBE7',
  techBadgeBackground: '#F5F3F0',

  browserDotRed: '#FF5F57',
  browserDotYellow: '#FEBC2E',
  browserDotGreen: '#28C840',

  white: '#FFFFFF',
}

export const fontFamilyMonospace = "'JetBrains Mono', monospace"
export const fontFamilySansSerif = "'Inter', -apple-system, sans-serif"
export const fontFamilySerif = "'Lora', Georgia, serif"

export const containerMaxWidthDesktop = 'min(1180px, 100% - 40px)'
export const containerMaxWidthMobile = 'min(1180px, 100% - 32px)'

declare module '@mui/material/styles' {
  interface Palette {
    surface: {
      main: string
      secondary: string
    }
    line: {
      main: string
      soft: string
    }
    fg: {
      main: string
      secondary: string
      tertiary: string
    }
  }
  interface PaletteOptions {
    surface?: {
      main: string
      secondary: string
    }
    line?: {
      main: string
      soft: string
    }
    fg?: {
      main: string
      secondary: string
      tertiary: string
    }
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.brandPrimary,
      dark: colors.brandPrimaryHover,
    },
    secondary: {
      main: colors.accentGreen,
      dark: colors.accentGreenDark,
    },
    background: {
      default: colors.pageBackground,
      paper: colors.cardBackground,
    },
    surface: {
      main: colors.cardBackground,
      secondary: colors.sectionBackgroundAlternate,
    },
    line: {
      main: colors.borderMedium,
      soft: colors.borderLight,
    },
    fg: {
      main: colors.textPrimary,
      secondary: colors.textSecondary,
      tertiary: colors.textTertiary,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  typography: {
    fontFamily: fontFamilySerif,
    h1: {
      fontFamily: fontFamilySansSerif,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontFamily: fontFamilySansSerif,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.035em',
      fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
    },
    h3: {
      fontFamily: fontFamilySansSerif,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      fontSize: '1.375rem',
    },
    h4: {
      fontFamily: fontFamilySansSerif,
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
      fontSize: '1.125rem',
    },
    body1: {
      fontSize: '17px',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        '::selection': {
          background: colors.brandPrimary,
          color: colors.white,
        },
        html: {
          scrollBehavior: 'smooth',
          scrollPaddingTop: '80px',
        },
        '@media (prefers-reduced-motion: reduce)': {
          html: {
            scrollBehavior: 'auto',
          },
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
          },
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        a: {
          color: colors.brandPrimary,
          textDecoration: 'none',
          transition: 'color 0.2s ease',
          '&:hover': {
            color: colors.accentGreen,
          },
          '&:focus-visible': {
            outline: `2px solid ${colors.brandPrimary}`,
            outlineOffset: '2px',
            borderRadius: '2px',
          },
        },
        'p:last-child': {
          marginBottom: 0,
        },
      },
    },
  },
})
