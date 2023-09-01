'use client'
import React from 'react'
import Menu from './menu/_menu'
import { HStack, Text, css } from '@kuma-ui/core'

export const HeaderHeight = '8vh';

export default function Header(){
  return (
    <nav className={css `position: relative; z-index: 999;`}>
      <HStack m={[0,0,16,0]} top={0} height={HeaderHeight} width={'100vw'} position={'sticky'} borderBottom={'solid'}>
        <Text width={'90vw'}>LOGO TEXT</Text>
        <Menu />
      </HStack>
    </nav>
  )
}