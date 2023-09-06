import React from 'react';
import { Box, css } from '@kuma-ui/core'
import { BannerHeight } from '../_banner'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  toggle: React.DispatchWithoutAction
}

export default function MenuInner({children, isOpen, toggle}: Props){

  return(
      <Box
      position={'absolute'} top={BannerHeight} left={0}
      height={'100vh'} width={'100vw'} m={0} p={0} zIndex={999} 
      bg={'black'} opacity={0.8}  
      onClick={toggle}
      overflow={'scroll'}
      className={isOpen ? css `display: inline`: css `display: none`}
      >
        {children}
      </Box>
  )
}