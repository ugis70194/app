import type { Metadata } from 'next'
import { css, k } from '@kuma-ui/core'

export const metadata: Metadata = {
  title: '抱華郷',
  description: 'ほーほけきょ',
  viewport: 'width=device-width'
}

export const globalStyle = css `
@media (prefers-color-scheme: dark){
  body {
    background-color: t("colors.bg_dark");
    color: t("colors.text_dark_body");
  },
  * a {
    color: t("colors.link_dark");
    text-decoration-color: t("colors.link_dark");
  },
  .text-title {
    color: t("colors.text_dark_title");
  },
  .icon {
    color: t("colors.icon_dark");
  },
},
@media (prefers-color-scheme: light){
  body {
    background-color: t("colors.bg_light");
    color: t("colors.text_light_body");
  },
  * a {
    color: t("colors.link_light");
    text-decoration-color: t("colors.link_light");
  },
  .text-title {
    color: t("colors.text_light_title");
  },
  .icon {
    color: t("colors.icon_light");
  },
}
`;

export default function RootLayout(
  {children}:
  {children: React.ReactNode}) 
{
  return (
    <html lang="jp" className={css `overflow-x: hidden`}>
      <k.body 
        suppressHydrationWarning={true}
        className={globalStyle}
      >
        {children}
      </k.body>
    </html>
  )
}
