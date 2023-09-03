import React from 'react'
import { HStack, css } from '@kuma-ui/core'

export const BannerHeight = '8vh'

export default async function Banner({children}:{children: React.ReactNode}){
  return (
    <nav className={
      css `display:flex; 
          position: sticky; top: 0; z-index: 20;
          height: 8vh; width: 100vw; 
          justify-items: center; justify-content: flex-end; 
          gap: 1rem;`}
    >
      {children}
    </nav>
    
  )
}