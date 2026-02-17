import React from 'react'
import { defineSection } from '@norium/theme-kit'

interface CTAProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

function CTASectionComponent({ title, subtitle, buttonText, buttonLink }: CTAProps) {
  return (
    <section style={{ padding: '4rem 1.5rem', background: 'var(--mavi-gradient)', textAlign: 'center', color: 'white' }}>
      <div className="mavi-container">
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>{title}</h2>
        <p style={{ opacity: 0.9, marginBottom: '1.5rem', maxWidth: 500, margin: '0 auto 1.5rem' }}>{subtitle}</p>
        <a href={buttonLink} style={{
          display: 'inline-flex', padding: '0.75rem 2rem', background: 'white',
          color: 'var(--cp-color-primary)', borderRadius: 'var(--cp-radius-md)',
          textDecoration: 'none', fontWeight: 600,
        }}>
          {buttonText}
        </a>
      </div>
    </section>
  )
}

export default defineSection(
  {
    label: 'CTA',
    slot: 'public.content',
    icon: 'zap',
    description: 'Aksiyon cagri blogu',
    props: {
      title: { type: 'text', label: 'Baslik', default: 'Randevunuzu hemen alin' },
      subtitle: { type: 'text', label: 'Alt baslik', default: 'Uzman kadromuz sizi bekliyor.' },
      buttonText: { type: 'text', label: 'Buton', default: 'Randevu Al' },
      buttonLink: { type: 'text', label: 'Link', default: '/randevu' },
    },
  },
  CTASectionComponent,
)
