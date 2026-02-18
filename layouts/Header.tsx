import React from 'react'
import { defineLayout } from '@noriumjs/theme-kit'
import { useCurrentClinic, useThemeConfig } from '@noriumjs/common/hooks'

function HeaderComponent({ children }: { children: React.ReactNode }) {
  const { clinic } = useCurrentClinic()
  const { settings } = useThemeConfig()
  const position = (settings?.layout?.headerPosition as string) ?? 'sticky'

  return (
    <header style={{
      position: position as 'sticky' | 'static',
      top: 0,
      zIndex: 100,
      height: 64,
      background: 'var(--cp-color-bg)',
      borderBottom: '1px solid var(--cp-color-border)',
      backdropFilter: 'blur(12px)',
    }}>
      <div className="mavi-container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--cp-color-primary)', textDecoration: 'none' }}>
          {clinic?.name ?? 'Klinik'}
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="/" style={{ color: 'var(--cp-color-text)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Ana Sayfa</a>
          <a href="/hakkimizda" style={{ color: 'var(--cp-color-text-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Hakkımızda</a>
          <a href="/iletisim" style={{ color: 'var(--cp-color-text-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>İletişim</a>
          <a href="/randevu" style={{
            display: 'inline-flex', padding: '0.5rem 1rem', background: 'var(--cp-color-primary)', color: 'white',
            borderRadius: 'var(--cp-radius-md)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500,
          }}>
            Randevu Al
          </a>
        </nav>
        {children}
      </div>
    </header>
  )
}

export default defineLayout({ type: 'header' }, HeaderComponent)
