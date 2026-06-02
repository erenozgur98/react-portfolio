import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material'
import { Header } from './components/Header'
import { About } from './components/About'
import { Work } from './components/Work'
import { Skills } from './components/Skills'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import {
  theme,
  fontFamilySerif,
  fontFamilySansSerif,
  colors,
} from './theme'

const applicationGlobalStyles = (
  <GlobalStyles
    styles={{
      '@keyframes fadeInUp': {
        from: {
          opacity: 0,
          transform: 'translateY(30px)',
        },
        to: {
          opacity: 1,
          transform: 'translateY(0)',
        },
      },
      '@keyframes fadeIn': {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      '@keyframes slideInLeft': {
        from: {
          opacity: 0,
          transform: 'translateX(-30px)',
        },
        to: {
          opacity: 1,
          transform: 'translateX(0)',
        },
      },
      '@keyframes slideInRight': {
        from: {
          opacity: 0,
          transform: 'translateX(30px)',
        },
        to: {
          opacity: 1,
          transform: 'translateX(0)',
        },
      },
      '@keyframes scaleIn': {
        from: {
          opacity: 0,
          transform: 'scale(0.95)',
        },
        to: {
          opacity: 1,
          transform: 'scale(1)',
        },
      },
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
        background: '#FAF9F7 !important',
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
        fontFamily: fontFamilySerif,
        fontSize: '17px',
        lineHeight: 1.7,
        color: colors.textPrimary,
        background: '#FAF9F7 !important',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      '#root': {
        background: '#FAF9F7',
      },
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: fontFamilySansSerif,
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '-0.025em',
        color: colors.textPrimary,
      },
      h2: {
        fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
        letterSpacing: '-0.035em',
      },
      'h2 em, h3 em': {
        fontStyle: 'italic',
        color: colors.accentGreen,
      },
      h3: {
        fontSize: '1.375rem',
        letterSpacing: '-0.02em',
      },
      h4: {
        fontSize: '1.125rem',
        letterSpacing: '-0.015em',
      },
      p: {
        marginBottom: '1rem',
      },
      'p:last-child': {
        marginBottom: 0,
      },
      a: {
        color: colors.brandPrimary,
        textDecoration: 'none',
        transition: 'color 0.2s ease',
      },
      'a:hover': {
        color: colors.accentGreen,
      },
      'a:focus-visible': {
        outline: `2px solid ${colors.brandPrimary}`,
        outlineOffset: '2px',
        borderRadius: '2px',
      },
    }}
  />
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {applicationGlobalStyles}
      <Header />
      <main role='main'>
        <About />
        <Work />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
