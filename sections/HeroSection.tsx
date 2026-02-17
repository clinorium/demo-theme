import React from 'react'
import { defineSection } from '@norium/theme-kit'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  style: 'gradient' | 'minimal'
}

function HeroSectionComponent({ title, subtitle, ctaText, ctaLink, style: heroStyle }: HeroProps) {
  const isGradient = heroStyle === 'gradient'

  return (
    <section style={{
      padding: '6rem 1.5rem',
      textAlign: 'center',
      color: isGradient ? 'white' : 'var(--cp-color-text)',
      background: isGradient ? 'var(--mavi-gradient)' : 'var(--cp-color-surface)',
    }}>
      <div className="mavi-container">
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
          {title}
        </h1>
        <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: 600, margin: '0 auto 2rem' }}>
          {subtitle}
        </p>
        <a href={ctaLink} style={{
          display: 'inline-flex', padding: '0.75rem 2rem',
          background: isGradient ? 'white' : 'var(--cp-color-primary)',
          color: isGradient ? 'var(--cp-color-primary)' : 'white',
          borderRadius: 'var(--cp-radius-md)', textDecoration: 'none', fontWeight: 600,
        }}>
          {ctaText}
        </a>
      </div>
    </section>
  )
}

export default defineSection(
  {
    label: 'Hero',
    slot: 'public.hero',
    icon: 'layout',
    description: 'Ana sayfa hero alani — gradient veya minimal',
    props: {
      title: { type: 'text', label: 'Baslik', default: 'Kliniginize Hosgeldiniz' },
      subtitle: { type: 'text', label: 'Alt baslik', default: 'Uzman kadromuzla sagliginiz icin en iyi hizmeti sunuyoruz.' },
      ctaText: { type: 'text', label: 'Buton metni', default: 'Randevu Al' },
      ctaLink: { type: 'text', label: 'Buton linki', default: '/randevu' },
      style: { type: 'select', label: 'Stil', default: 'gradient', options: ['gradient', 'minimal'] },
    },
  },
  HeroSectionComponent,
)
