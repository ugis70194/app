import type { Metadata } from 'next'
import MenuButton from './_menuButton'

export const metadata: Metadata = {
  title: '抱華郷',
  description: 'ほーほけきょ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <body>
        <MenuButton />
        {children}
      </body>
    </html>
  )
}
