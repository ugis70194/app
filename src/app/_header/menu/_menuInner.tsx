'use client'

import React, { useContext } from 'react';
import { MenuContext } from './_menu'
import { Box } from '@kuma-ui/core'


export default function MenuInner(){
  const [MenuOpen, toggle] = useContext(MenuContext);

  return(
    <>
    {
      !MenuOpen ? <></> :
      <Box position={'absolute'} 
      height={'100vh'} width={'100vw'} zIndex={2211} 
      bg={'black'} opacity={0.3}  
      onClick={toggle}>

      </Box>
    }
    </>
  )
}