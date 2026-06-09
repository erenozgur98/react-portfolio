import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Box, styled } from '@mui/material'
import { colors } from '../../theme'

interface ImageLightboxProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  isMobileApp?: boolean
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

const LightboxOverlay = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.9)',
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
})

const LightboxContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '100%',
  maxHeight: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))

const LightboxImage = styled('img')<{ isMobileApp?: boolean }>(
  ({ theme, isMobileApp }) => ({
    maxWidth: isMobileApp ? '320px' : '90vw',
    maxHeight: '85vh',
    objectFit: 'contain',
    borderRadius: '12px',
    background: 'transparent',
    [theme.breakpoints.down('sm')]: {
      maxWidth: isMobileApp ? '280px' : '95vw',
      maxHeight: '75vh',
    },
  }),
)

const NavButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: colors.cardBackground,
  border: `1px solid ${colors.borderLight}`,
  borderRadius: '50%',
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '1.25rem',
  color: colors.textPrimary,
  transition: 'all 0.2s ease',
  '&:hover': {
    background: colors.pillBackgroundHover,
    transform: 'translateY(-50%) scale(1.05)',
  },
  '&:disabled': {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
  [theme.breakpoints.down('sm')]: {
    width: '40px',
    height: '40px',
    fontSize: '1rem',
  },
}))

const PrevButton = styled(NavButton)(({ theme }) => ({
  left: '-70px',
  [theme.breakpoints.down('md')]: {
    left: '10px',
  },
}))

const NextButton = styled(NavButton)(({ theme }) => ({
  right: '-70px',
  [theme.breakpoints.down('md')]: {
    right: '10px',
  },
}))

const CloseButton = styled('button')(({ theme }) => ({
  position: 'fixed',
  top: '20px',
  right: '20px',
  background: colors.cardBackground,
  border: `1px solid ${colors.borderLight}`,
  borderRadius: '50%',
  width: '44px',
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '1.5rem',
  color: colors.textPrimary,
  transition: 'all 0.2s ease',
  zIndex: 10000,
  '&:hover': {
    background: colors.pillBackgroundHover,
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    top: '10px',
    right: '10px',
    width: '40px',
    height: '40px',
    fontSize: '1.25rem',
  },
}))

const ImageCounter = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: colors.cardBackground,
  border: `1px solid ${colors.borderLight}`,
  borderRadius: '20px',
  padding: '8px 16px',
  fontSize: '0.875rem',
  color: colors.textSecondary,
  [theme.breakpoints.down('sm')]: {
    bottom: '10px',
    padding: '6px 12px',
    fontSize: '0.75rem',
  },
}))

export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  isMobileApp,
  onClose,
  onPrevious,
  onNext,
}: ImageLightboxProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) return
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrevious()
      if (event.key === 'ArrowRight') onNext()
    },
    [isOpen, onClose, onPrevious, onNext],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown, isOpen])

  if (!isOpen) return null

  return createPortal(
    <LightboxOverlay onClick={onClose}>
      <CloseButton onClick={onClose} aria-label='Close lightbox'>
        ×
      </CloseButton>

      <LightboxContent onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
          <PrevButton
            onClick={onPrevious}
            disabled={currentIndex === 0}
            aria-label='Previous image'
          >
            ←
          </PrevButton>
        )}

        <LightboxImage
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          isMobileApp={isMobileApp}
        />

        {images.length > 1 && (
          <NextButton
            onClick={onNext}
            disabled={currentIndex === images.length - 1}
            aria-label='Next image'
          >
            →
          </NextButton>
        )}
      </LightboxContent>

      {images.length > 1 && (
        <ImageCounter>
          {currentIndex + 1} / {images.length}
        </ImageCounter>
      )}
    </LightboxOverlay>,
    document.body
  )
}
