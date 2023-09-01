import type { Metadata } from 'next'
import Header from './_header/_header'

export const metadata: Metadata = {
  title: '抱華郷',
  description: 'ほーほけきょ',
  viewport: 'width=device-width'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
