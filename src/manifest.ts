import { defineTheme } from '@norium/theme-kit'

export default defineTheme({
  id: 'mavi',
  name: 'Mavi Klinik',
  version: '0.1.0',
  description: 'Modern ve temiz klinik teması',
  author: 'Clinorium',
  settings: {
    colors: {
      primary: { type: 'color', label: 'Ana Renk', default: '#2563eb' },
      accent: { type: 'color', label: 'Vurgu Rengi', default: '#06b6d4' },
      background: { type: 'color', label: 'Arka Plan', default: '#ffffff' },
      surface: { type: 'color', label: 'Yüzey', default: '#f8fafc' },
    },
    typography: {
      fontFamily: { type: 'select', label: 'Yazı Tipi', default: 'Inter', options: ['Inter', 'Roboto', 'Poppins'] },
      baseFontSize: { type: 'number', label: 'Font Boyutu (px)', default: 16 },
    },
    layout: {
      maxWidth: { type: 'select', label: 'Maks. Genişlik', default: '1280px', options: ['1024px', '1280px', '1440px'] },
      headerPosition: { type: 'select', label: 'Header', default: 'sticky', options: ['static', 'sticky'] },
    },
  },
  branding: {
    adminAccentColor: { type: 'color', label: 'Admin Rengi', default: '#2563eb' },
    borderRadius: { type: 'select', label: 'Köşe Yuvarlaklığı', default: '8px', options: ['0px', '4px', '8px', '12px'] },
    darkMode: { type: 'boolean', label: 'Karanlık Mod', default: true },
  },
})
