'use client'
import React, { useContext } from 'react';
import { MenuContext } from './_menu'
import { Box } from '@kuma-ui/core'
import Image from 'next/image'

export default function MenuButton() {
  const [MenuOpen, toggle] = useContext(MenuContext);

  return (
    <Box as='button' onClick={toggle} p={4} m={4}>
      {
        MenuOpen
        ? <Image src='/icons/cross.svg' alt='menu open' width={50} height={50} />
        : <Image src='/icons/menu-burger.svg' alt='menu close' width={50} height={50} />
      }
    </Box>
  )
}
