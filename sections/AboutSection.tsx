import React from 'react'
import { defineSection } from '@norium/theme-kit'

interface AboutProps {
  title: string
  text: string
  imageUrl: string
  imagePosition: 'left' | 'right'
}

function AboutSectionComponent({ title, text, imageUrl, imagePosition }: AboutProps) {
  const imgBlock = (
    <div style={{
      borderRadius: 'var(--cp-radius-md)',
      background: 'var(--cp-color-surface)',
      minHeight: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {imageUrl ? (
        <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span style={{ color: 'var(--cp-color-text-muted)' }}>📷 Klinik Fotografi</span>
      )}
    </div>
  )

  const textBlock = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>{title}</h2>
      <p style={{ color: 'var(--cp-color-text-secondary)', lineHeight: 1.8, fontSize: '0.9375rem' }}>{text}</p>
    </div>
  )

  return (
    <section className="mavi-section">
      <div className="mavi-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          {imagePosition === 'left' ? <>{imgBlock}{textBlock}</> : <>{textBlock}{imgBlock}</>}
        </div>
      </div>
    </section>
  )
}

export default defineSection(
  {
    label: 'Hakkimizda',
    slot: 'public.content',
    icon: 'info',
    description: 'Resim + metin ile tanitim blogu',
    props: {
      title: { type: 'text', label: 'Baslik', default: 'Hakkimizda' },
      text: { type: 'text', label: 'Metin', default: 'Klinigemiz 2010 yilindan beri Istanbul da hizmet vermektedir. Uzman kadromuz ve modern ekipmanlarimizla sagliginiz icin en iyi hizmeti sunuyoruz.' },
      imageUrl: { type: 'image', label: 'Gorsel', default: '' },
      imagePosition: { type: 'select', label: 'Gorsel konumu', default: 'left', options: ['left', 'right'] },
    },
  },
  AboutSectionComponent,
)
