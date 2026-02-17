import React from 'react'
import { defineLayout } from '@norium/theme-kit'
import { Stack, Grid, Divider } from '@norium/ui'
import { useCurrentClinic } from '@norium/common/hooks'

function FooterComponent({ children }: { children: React.ReactNode }) {
  const { clinic } = useCurrentClinic()

  return (
    <footer style={{ background: 'var(--mavi-surface)', borderTop: '1px solid var(--mavi-border)' }}>
      <div className="mavi-container" style={{ padding: '3rem 1.5rem' }}>
        <Grid columns={{ sm: 1, md: 3 }} gap={6}>
          <div>
            <h3 style={{ fontWeight: 'var(--cp-weight-bold)', color: 'var(--mavi-primary)' }}>{clinic?.name ?? 'Klinik'}</h3>
            <p style={{ fontSize: 'var(--cp-text-sm)', color: 'var(--mavi-text-muted)', marginTop: '0.5rem' }}>
              Sağlığınız için yanınızdayız.
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: 'var(--cp-weight-semibold)', marginBottom: '0.5rem' }}>İletişim</h4>
            <p style={{ fontSize: 'var(--cp-text-sm)', color: 'var(--mavi-text-muted)' }}>📞 +90 (212) 555 00 00</p>
            <p style={{ fontSize: 'var(--cp-text-sm)', color: 'var(--mavi-text-muted)' }}>✉️ info@klinik.com</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 'var(--cp-weight-semibold)', marginBottom: '0.5rem' }}>Çalışma Saatleri</h4>
            <p style={{ fontSize: 'var(--cp-text-sm)', color: 'var(--mavi-text-muted)' }}>Pzt-Cum: 09:00 - 18:00</p>
            <p style={{ fontSize: 'var(--cp-text-sm)', color: 'var(--mavi-text-muted)' }}>Cmt: 09:00 - 14:00</p>
          </div>
        </Grid>
        <Divider />
        <span style={{ fontSize: 'var(--cp-text-xs)', color: 'var(--mavi-text-muted)' }}>
          &copy; {new Date().getFullYear()} {clinic?.name ?? 'Klinik'}. Tüm hakları saklıdır.
        </span>
        {children}
      </div>
    </footer>
  )
}

export default defineLayout({ type: 'footer' }, FooterComponent)
