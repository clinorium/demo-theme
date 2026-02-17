import React from 'react'
import { defineLayout } from '@norium/theme-kit'
import { useCurrentClinic } from '@norium/common/hooks'

function FooterComponent({ children }: { children: React.ReactNode }) {
  const { clinic } = useCurrentClinic()

  return (
    <footer style={{ background: 'var(--cp-color-surface)', borderTop: '1px solid var(--cp-color-border)', padding: '3rem 0 1.5rem' }}>
      <div className="mavi-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <h3 style={{ fontWeight: 700, color: 'var(--cp-color-primary)', marginBottom: '0.75rem' }}>{clinic?.name ?? 'Klinik'}</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--cp-color-text-muted)', lineHeight: 1.6 }}>
              Sağlığınız için yanınızdayız.
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.875rem' }}>Sayfalar</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="/" style={{ fontSize: '0.875rem', color: 'var(--cp-color-text-muted)', textDecoration: 'none' }}>Ana Sayfa</a>
              <a href="/hakkimizda" style={{ fontSize: '0.875rem', color: 'var(--cp-color-text-muted)', textDecoration: 'none' }}>Hakkımızda</a>
              <a href="/iletisim" style={{ fontSize: '0.875rem', color: 'var(--cp-color-text-muted)', textDecoration: 'none' }}>İletişim</a>
            </nav>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.875rem' }}>İletişim</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--cp-color-text-muted)' }}>
              <span>📞 +90 (212) 555 00 00</span>
              <span>✉️ info@klinik.com</span>
              <span>📍 İstanbul, Türkiye</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.875rem' }}>Çalışma Saatleri</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--cp-color-text-muted)' }}>
              <span>Pzt-Cum: 09:00 - 18:00</span>
              <span>Cmt: 09:00 - 14:00</span>
              <span>Pzr: Kapalı</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--cp-color-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--cp-color-text-muted)' }}>
            &copy; {new Date().getFullYear()} {clinic?.name ?? 'Klinik'}. Tüm hakları saklıdır.
          </span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="/gizlilik" style={{ fontSize: '0.75rem', color: 'var(--cp-color-text-muted)', textDecoration: 'none' }}>Gizlilik</a>
            <a href="/kvkk" style={{ fontSize: '0.75rem', color: 'var(--cp-color-text-muted)', textDecoration: 'none' }}>KVKK</a>
          </div>
        </div>
        {children}
      </div>
    </footer>
  )
}

export default defineLayout({ type: 'footer' }, FooterComponent)
