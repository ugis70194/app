import type { Metadata } from 'next'
import { css } from '@kuma-ui/core'

export const metadata: Metadata = {
  title: '抱華郷',
  description: 'ほーほけきょ',
  viewport: 'width=device-width'
}

export default function RootLayout(
  {children}:
  {children: React.ReactNode}) 
{
  return (
    <html lang="jp" className={css `overflow-x: hidden`}>
      <body className={css `margin: 0`}>
        {children}
      </body>
    </html>
  )
}
