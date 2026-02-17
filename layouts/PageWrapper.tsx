import React from 'react'
import { defineLayout } from '@norium/theme-kit'

function PageWrapperComponent({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  )
}

export default defineLayout({ type: 'page-wrapper' }, PageWrapperComponent)
