import React from 'react'
import { defineSection } from '@noriumjs/theme-kit'

interface ContactProps {
  title: string
  showMap: boolean
}

function ContactSectionComponent({ title, showMap }: ContactProps) {
  return (
    <section className="mavi-section">
      <div className="mavi-container">
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>{title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Form */}
          <div className="mavi-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Mesaj Gonderin</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input placeholder="Ad Soyad" style={{ padding: '0.625rem 0.75rem', border: '1px solid var(--cp-color-border)', borderRadius: 'var(--cp-radius-md)', fontSize: '0.875rem' }} />
              <input placeholder="E-posta" type="email" style={{ padding: '0.625rem 0.75rem', border: '1px solid var(--cp-color-border)', borderRadius: 'var(--cp-radius-md)', fontSize: '0.875rem' }} />
              <input placeholder="Telefon" type="tel" style={{ padding: '0.625rem 0.75rem', border: '1px solid var(--cp-color-border)', borderRadius: 'var(--cp-radius-md)', fontSize: '0.875rem' }} />
              <textarea placeholder="Mesajiniz" rows={4} style={{ padding: '0.625rem 0.75rem', border: '1px solid var(--cp-color-border)', borderRadius: 'var(--cp-radius-md)', fontSize: '0.875rem', resize: 'vertical' }} />
              <button type="submit" style={{
                padding: '0.75rem', background: 'var(--cp-color-primary)', color: 'white',
                border: 'none', borderRadius: 'var(--cp-radius-md)', fontWeight: 600, cursor: 'pointer',
              }}>
                Gonder
              </button>
            </form>
          </div>

          {/* Bilgiler */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="mavi-card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>📍 Adres</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--cp-color-text-muted)' }}>Ataturk Mah. Saglik Cad. No: 42, Kadikoy / Istanbul</p>
            </div>
            <div className="mavi-card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>📞 Telefon</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--cp-color-text-muted)' }}>+90 (216) 555 00 00</p>
            </div>
            <div className="mavi-card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>🕐 Calisma Saatleri</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--cp-color-text-muted)' }}>Pzt-Cum: 09:00 - 18:00 | Cmt: 09:00 - 14:00</p>
            </div>
            {showMap && (
              <div className="mavi-card" style={{ padding: '1.5rem', minHeight: 150, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cp-color-text-muted)' }}>
                [Harita alani — Google Maps embed]
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default defineSection(
  {
    label: 'Iletisim',
    slot: 'public.content',
    icon: 'mail',
    description: 'Iletisim formu ve bilgileri',
    props: {
      title: { type: 'text', label: 'Baslik', default: 'Iletisim' },
      showMap: { type: 'boolean', label: 'Harita goster', default: true },
    },
  },
  ContactSectionComponent,
)
