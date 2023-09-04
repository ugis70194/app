'use client'

import React, { useReducer } from 'react'
import MenuButton from './_menuButton'
import MenuInner from './_menuInner'
import { Box } from '@kuma-ui/core'

function reducer(state: boolean){
  return !state;
}

export default function Menu({projectName}: {projectName: string}){
  const [isOpen, toggle] = useReducer(reducer, false);
  return (
    <Box height={'100%'}>
      <MenuButton isOpen={isOpen} toggle={toggle} />
      <MenuInner isOpen={isOpen} toggle={toggle} projectName={projectName} />
    </Box>
  )
}