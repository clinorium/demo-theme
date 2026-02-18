import React from 'react'
import { defineSection } from '@noriumjs/theme-kit'

interface TestimonialsProps {
  title: string
}

const TESTIMONIALS = [
  { name: 'Ayse K.', text: 'Cok ilgili ve profesyonel bir ekip. Tedavi surecim boyunca kendimi guvende hissettim.', rating: 5 },
  { name: 'Mehmet Y.', text: 'Online randevu sistemi cok pratik. Hic beklemeden muayeneme girdim.', rating: 5 },
  { name: 'Zeynep D.', text: 'Implant tedavimi burada yaptirdim, sonuctan cok memnunum.', rating: 4 },
]

function TestimonialsSectionComponent({ title }: TestimonialsProps) {
  return (
    <section className="mavi-section" style={{ background: 'var(--cp-color-surface)' }}>
      <div className="mavi-container">
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>{title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="mavi-card" style={{ padding: '1.5rem' }}>
              <div style={{ color: '#f59e0b', marginBottom: '0.75rem' }}>{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
              <p style={{ color: 'var(--cp-color-text-secondary)', fontSize: '0.875rem', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '1rem' }}>
                "{t.text}"
              </p>
              <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default defineSection(
  {
    label: 'Hasta Yorumlari',
    slot: 'public.content',
    icon: 'message-circle',
    description: 'Hasta yorumlari ve puanlari',
    props: {
      title: { type: 'text', label: 'Baslik', default: 'Hasta Yorumlari' },
    },
  },
  TestimonialsSectionComponent,
)
