import React from 'react'
import { css, k } from '@kuma-ui/core'

export default function Banner({children}:{children: React.ReactNode}){
  return (
    <k.nav
    position={'sticky'}
    display={'flex'}
    justifyContent={'flex-end'}
    alignItems={'center'}
    top={0}
    zIndex={20}
    width={'calc(100vw - 32px)'}
    height={'8vh'}
    gap={'2rem'}
    borderBottomStyle={'solid'}
    className={mediaStyle}
    >
      {children}
    </k.nav>
    
  )
}

const mediaStyle = css `
  @media (prefers-color-scheme: dark) {
    background-color: t("colors.bg_dark");
    border-color: t("colors.icon_dark");
  },
  @media (prefers-color-scheme: light) {
    background-color: t("colors.bg_light");
    border-color: t("colors.icon_light");
  }
`