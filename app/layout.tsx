import type { Metadata } from 'next'
import { Inter, Kalam } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const kalam = Kalam({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-kalam'
})

export const metadata: Metadata = {
  title: 'La Carte des Villages Résistants NIRD',
  description: 'Explorez comment les établissements scolaires résistent à l\'empire des Big Tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${kalam.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

