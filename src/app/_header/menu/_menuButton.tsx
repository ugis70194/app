import React, { useContext } from 'react';
import { Box, Flex } from '@kuma-ui/core'
import Image from 'next/image'
import { HeaderHeight } from '../_header';

interface Props {
  isOpen: boolean
  toggle: React.DispatchWithoutAction
}

export default function MenuButton({isOpen, toggle}: Props) {

  return (
    <Box position={'relative'} onClick={toggle} height={HeaderHeight} width={HeaderHeight} margin={[0,0,0,'auto']}>
      {
        isOpen
        ? <Image src='/icons/cross.svg' alt='menu open' fill={true} />
        : <Image src='/icons/menu-burger.svg' alt='menu close' fill={true} />
      }
    </Box>
  )
}
