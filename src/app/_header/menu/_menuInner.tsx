'use client'
import React, { useContext } from 'react';
import { MenuContext } from './_menu'
import { Box } from '@kuma-ui/core'
import { HeaderHeight } from '../_header'


export default function MenuInner(){
  const [MenuOpen, toggle] = useContext(MenuContext);

  return(
    <>
    {
      !MenuOpen ? <></> :
      <Box
      position={'absolute'} top={HeaderHeight}
      height={'100vh'} width={'100vw'} m={0} p={0} zIndex={2147483647} 
      bg={'black'} opacity={0.5}  
      onClick={toggle}>

      </Box>
    }
    </>
  )
}