import React from 'react'
import MenuButton from './menuButton'
import MenuItems from './menuItems'
import { Box, css } from '@kuma-ui/core'

const animetion = css `
.menu-items {
  transform: translateY(-200%);
},
div:has(input[class=menu-checkbox]:checked) ~ .menu-items {
  transform: translateY(0);
},
`

export default function Menu({project}: {project: string}){
  return (
    <Box height={'100%'} className={animetion}>
      <MenuButton />
      <MenuItems project={project} />
    </Box>
  )
}