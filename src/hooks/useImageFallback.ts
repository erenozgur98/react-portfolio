import type { SyntheticEvent } from 'react'

export function handleImageErrorWithFallback(event: SyntheticEvent<HTMLImageElement>) {
  const imageElement = event.currentTarget
  imageElement.style.display = 'none'
  const fallbackElement = imageElement.nextElementSibling as HTMLElement
  if (fallbackElement) {
    fallbackElement.style.display = 'block'
  }
}

export function handleImageErrorWithFlexFallback(event: SyntheticEvent<HTMLImageElement>) {
  const imageElement = event.currentTarget
  imageElement.style.display = 'none'
  const fallbackElement = imageElement.nextElementSibling as HTMLElement
  if (fallbackElement) {
    fallbackElement.style.display = 'flex'
  }
}
