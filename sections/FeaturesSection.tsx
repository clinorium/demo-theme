import React from 'react'
import { defineSection } from '@norium/theme-kit'
import { Grid, Stack } from '@norium/ui'

const FEATURES = [
  { icon: '🏥', title: 'Modern Klinik', desc: 'Son teknoloji ekipmanlarla donatılmış ortam' },
  { icon: '👨‍⚕️', title: 'Uzman Kadro', desc: 'Alanında deneyimli hekim kadrosu' },
  { icon: '⏰', title: 'Esnek Randevu', desc: 'Online randevu sistemiyle kolay erişim' },
]

function FeaturesSectionComponent() {
  return (
    <section style={{ padding: '5rem 1.5rem' }}>
      <div className="mavi-container">
        <h2 style={{ fontSize: 'var(--cp-text-2xl)', fontWeight: 'var(--cp-weight-bold)', textAlign: 'center', marginBottom: '3rem' }}>
          Neden Bizi Seçmelisiniz?
        </h2>
        <Grid columns={{ sm: 1, md: 3 }} gap={4}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{
              padding: '1.5rem', borderRadius: 'var(--mavi-radius)',
              border: '1px solid var(--mavi-border)', background: 'var(--mavi-bg)',
              boxShadow: 'var(--mavi-shadow)',
            }}>
              <Stack gap={2}>
                <span style={{ fontSize: '2rem' }}>{f.icon}</span>
                <h3 style={{ fontWeight: 'var(--cp-weight-semibold)' }}>{f.title}</h3>
                <p style={{ color: 'var(--mavi-text-muted)', fontSize: 'var(--cp-text-sm)' }}>{f.desc}</p>
              </Stack>
            </div>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default defineSection(
  { label: 'Özellikler', slot: 'public.content', icon: 'star', description: 'Neden biz bölümü' },
  FeaturesSectionComponent,
)
