import React from 'react'
import { k } from '@kuma-ui/core'

export default function Banner({children}:{children: React.ReactNode}){
  return (
    <k.nav
    position={'sticky'}
    display={'flex'}
    justifyContent={'flex-end'}
    top={0}
    zIndex={20}
    width={'100vw'}
    gap={'2rem'}
    >
      {children}
    </k.nav>
    
  )
}