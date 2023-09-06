'use client'

import React, { useContext } from 'react'
import { R18Context } from '../_r18ContextProvider'
import { Box } from '@kuma-ui/core'

export default function R18Switch() {
  const {R18on, toggle} = useContext(R18Context);
  return (
    <Box    
        backgroundColor={ R18on ? 'pink' : 'gray' } 
        color={'white'}
        height={'80%'} borderRadius={8}
        onClick={toggle}
        textAlign={'center'}
        padding={4}
    >
      {
        R18on ? 'R-18 on' : 'R-18 off'
      }
    </Box>
  )
}