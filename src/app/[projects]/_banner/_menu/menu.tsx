import React from 'react'
import MenuButton from './menuButton'
import MenuItems from './menuItems'
import { Box, css } from '@kuma-ui/core'

export default function Menu({project}: {project: string}){
  return (
    <Box
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
  @media (prefers-color-scheme: dark) {
    background-color: t("colors.bg_dark");
  },
  @media (prefers-color-scheme: light) {
    background-color: t("colors.bg_light");
  }
},
div:has(input[class=menu-checkbox]:checked) ~ .menu-items {
  transform: translateY(calc(0% + 2px));
},
`;