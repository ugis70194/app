import type { Metadata } from 'next'
import Menu from './_header/menu/_menu'

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
        <Menu />
        {children}
      </body>
    </html>
  )
}
