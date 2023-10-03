import React from 'react';
import { Box, Image, css } from '@kuma-ui/core'

export interface Props {
  isOpen: boolean
  toggle: React.DispatchWithoutAction
}

export default function MenuButton({isOpen, toggle}: Props) {

  return (
    <Box height={'100%'} marginRight={'auto'} onClick={toggle}>
      {
        isOpen
        ? <Image src='/icons/cross.svg' alt='menu open' height={'100%'} className={css `object-fit: scale-down`} />
        : <Image src='/icons/menu-burger.svg' alt='menu close' height={'100%'} className={css `object-fit: scale-down`} />
      }
    </Box>
  )
}
