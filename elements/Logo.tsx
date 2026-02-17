import React from 'react'
import { defineElement } from '@norium/theme-kit'

function LogoComponent({ size = 'md', text = 'Klinik' }: { size?: 'sm' | 'md' | 'lg'; text?: string }) {
  const sizes = { sm: '1.25rem', md: '1.5rem', lg: '2rem' }
  return (
    <span style={{ fontSize: sizes[size], fontWeight: 800, color: 'var(--mavi-primary)' }}>
      {text}
    </span>
  )
}

export default defineElement({ name: 'Logo', description: 'Tema logo bileşeni' }, LogoComponent)
