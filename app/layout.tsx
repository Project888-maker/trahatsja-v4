import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TRAHATSJA — Wear Your Confidence',
  description:
    'Dark luxury lingerie and underwear crafted for those who demand beauty in every layer. Shop the women\'s and men\'s collections.',
  keywords: ['luxury lingerie', 'underwear', 'lace', 'satin', 'TRAHATSJA'],
  openGraph: {
    title: 'TRAHATSJA — Wear Your Confidence',
    description: 'Dark luxury lingerie and underwear crafted for confidence.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${playfair.variable} ${cormorant.variable}`}>
      <body className={`${cormorant.className} antialiased`}>{children}</body>
    </html>
  )
}
