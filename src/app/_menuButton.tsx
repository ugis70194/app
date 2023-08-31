'use client'
import React from 'react';
import { Box } from '@kuma-ui/core'
import Image from 'next/image'

export default function MenuButton() {
  const [MenuOpen, toggle] = React.useReducer((state) => !state, false);

  return (
    <Box as='button' onClick={() => toggle()} p={16}>
      {
        MenuOpen
        ? <Image src='/icons/menu-burger.svg' alt='menu open' width={50} height={50} />
        : <Image src='/icons/cross.svg' alt='menu close' width={50} height={50} />
      }
    </Box>
  )
}
