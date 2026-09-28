import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'Gilberto Monroy | Desarrollador Backend Junior C# .NET',
  description: 'Portfolio de Gilberto Monroy, desarrollador backend junior especializado en C#, .NET, ASP.NET y bases de datos.',
  metadataBase: new URL('https://gilbertoalejandromonroymorales.com'),
  openGraph: { title: 'Gilberto Monroy | Desarrollador Backend Junior', description: 'Construyo soluciones digitales con C# y .NET.', url: 'https://gilbertoalejandromonroymorales.com', siteName: 'Gilberto Monroy', locale: 'es_MX', type: 'website' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#070b14', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className="bg-background"><body className={`${inter.variable} ${mono.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
