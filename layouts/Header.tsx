import React from 'react'
import { defineLayout } from '@norium/theme-kit'
import { Stack, Button } from '@norium/ui'
import { useCurrentClinic } from '@norium/common/hooks'

function HeaderComponent({ children }: { children: React.ReactNode }) {
  const { clinic } = useCurrentClinic()

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100, height: 64,
      background: 'var(--mavi-bg)', borderBottom: '1px solid var(--mavi-border)',
      backdropFilter: 'blur(12px)',
    }}>
      <div className="mavi-container" style={{ height: '100%' }}>
        <Stack direction="horizontal" justify="between" align="center" style={{ height: '100%' }}>
          <span style={{ fontSize: 'var(--cp-text-xl)', fontWeight: 'var(--cp-weight-bold)', color: 'var(--mavi-primary)' }}>
            {clinic?.name ?? 'Klinik'}
          </span>
          <Stack direction="horizontal" gap={4} align="center">
            <a href="/" style={{ color: 'var(--mavi-text)', textDecoration: 'none', fontSize: 'var(--cp-text-sm)' }}>Ana Sayfa</a>
            <a href="/hizmetler" style={{ color: 'var(--mavi-text-muted)', textDecoration: 'none', fontSize: 'var(--cp-text-sm)' }}>Hizmetler</a>
            <Button variant="primary" size="sm">Randevu Al</Button>
          </Stack>
          {children}
        </Stack>
      </div>
    </header>
  )
}

export default defineLayout({ type: 'header' }, HeaderComponent)
