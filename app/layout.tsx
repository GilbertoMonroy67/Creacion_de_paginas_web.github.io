import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-dm-serif' })

export const metadata: Metadata = {
  title: 'Gilberto Monroy | Desarrollador Backend Junior C# .NET',
  description: 'Portfolio de Gilberto Monroy, desarrollador backend junior especializado en C#, .NET, ASP.NET y bases de datos.',
  metadataBase: new URL('https://gilbertoalejandromonroymorales.com'),
  openGraph: { title: 'Gilberto Monroy | Desarrollador Backend Junior', description: 'Construyo soluciones digitales con C# y .NET.', url: 'https://gilbertoalejandromonroymorales.com', siteName: 'Gilberto Monroy', locale: 'es_MX', type: 'website' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#101312', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className="bg-background"><body className={`${dmSans.variable} ${dmSerif.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
