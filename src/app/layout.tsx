import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
