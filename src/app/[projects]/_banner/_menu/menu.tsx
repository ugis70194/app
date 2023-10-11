import React from 'react'
import MenuButton from './menuButton'
import MenuItems from './menuItems'
import { Box, css } from '@kuma-ui/core'

export default function Menu({project}: {project: string}){
  return (
    <Box
    height={'100%'} 
    className={animetion}>
      <MenuButton />
      <MenuItems project={project} />
    </Box>
  )
}

const animetion = css `
.menu-items {
  transform: translateY(-200%);
  left: 0;
},
div:has(input[class=menu-checkbox]:checked) ~ .menu-items {
  transform: translateY(0);
},
`;