import React from 'react'
import { defineSection } from '@norium/theme-kit'

interface FeaturesProps {
  title: string
  columns: number
}

const FEATURES = [
  { icon: '🏥', title: 'Modern Klinik', desc: 'Son teknoloji ekipmanlarla donatilmis ortam' },
  { icon: '👨‍⚕️', title: 'Uzman Kadro', desc: 'Alaninda deneyimli hekim kadrosu' },
  { icon: '⏰', title: 'Esnek Randevu', desc: 'Online randevu sistemiyle kolay erisim' },
  { icon: '💳', title: 'Kolay Odeme', desc: 'Taksitli odeme ve sigorta destegi' },
]

function FeaturesSectionComponent({ title, columns }: FeaturesProps) {
  return (
    <section className="mavi-section">
      <div className="mavi-container">
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
          {title}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '1.5rem' }}>
          {FEATURES.map((f, i) => (
            <div key={i} className="mavi-card" style={{ padding: '1.5rem' }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>{f.icon}</span>
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--cp-color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default defineSection(
  {
    label: 'Ozellikler',
    slot: 'public.content',
    icon: 'star',
    description: 'Kart bazli ozellik listesi',
    props: {
      title: { type: 'text', label: 'Baslik', default: 'Neden Bizi Secmelisiniz?' },
      columns: { type: 'number', label: 'Sutun sayisi', default: 4 },
    },
  },
  FeaturesSectionComponent,
)
