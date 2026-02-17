import React from 'react'
import { defineSection } from '@norium/theme-kit'
import { Stack } from '@norium/ui'
import { useCurrentClinic } from '@norium/common/hooks'

function HeroSectionComponent() {
  const { clinic } = useCurrentClinic()

  return (
    <section style={{
      padding: '6rem 1.5rem', textAlign: 'center', color: 'white',
      background: `linear-gradient(135deg, var(--mavi-primary), var(--mavi-accent))`,
    }}>
      <Stack align="center" gap={3}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800 }}>
          {clinic?.name ?? 'Klinik'}
        </h1>
        <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: 600 }}>
          Uzman kadromuzla sağlığınız için en iyi hizmeti sunuyoruz.
        </p>
        <button style={{
          padding: '0.75rem 2rem', background: 'white', color: 'var(--mavi-primary)',
          border: 'none', borderRadius: 'var(--mavi-radius)', fontWeight: 600, cursor: 'pointer',
        }}>
          Randevu Al
        </button>
      </Stack>
    </section>
  )
}

export default defineSection(
  { label: 'Hero', slot: 'public.hero', icon: 'layout', description: 'Gradient hero alanı' },
  HeroSectionComponent,
)
