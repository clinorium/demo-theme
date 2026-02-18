import React from 'react'
import { defineElement } from '@noriumjs/theme-kit'

function LogoComponent({ size = 'md', text = 'Klinik' }: { size?: 'sm' | 'md' | 'lg'; text?: string }) {
  const sizes = { sm: '1.25rem', md: '1.5rem', lg: '2rem' }
  return (
    <span style={{ fontSize: sizes[size], fontWeight: 800, color: 'var(--cp-color-primary)', letterSpacing: '-0.025em' }}>
      {text}
    </span>
  )
}

export default defineElement({ name: 'Logo', description: 'Tema logo biliseni' }, LogoComponent)
