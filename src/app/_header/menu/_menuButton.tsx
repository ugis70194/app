'use client'
import React, { useContext } from 'react';
import { MenuContext } from './_menu'
import { Box, Flex } from '@kuma-ui/core'
import Image from 'next/image'
import { HeaderHeight } from '../_header';

export default function MenuButton() {
  const [MenuOpen, toggle] = useContext(MenuContext);

  return (
    <Box position={'relative'} onClick={toggle} height={HeaderHeight} width={HeaderHeight} right={0}>
      {
        MenuOpen
        ? <Image src='/icons/cross.svg' alt='menu open' fill={true} />
        : <Image src='/icons/menu-burger.svg' alt='menu close' fill={true} />
      }
    </Box>
  )
}
