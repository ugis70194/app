import React from 'react'
import { Box, css } from '@kuma-ui/core'

export default function MenuButton(){
  return (
  <Box 
    className={buttonStyle}
  >
    <input type="checkbox" id="menu-toggle" className='menu-checkbox' />
    <label htmlFor="menu-toggle" className='menu-button'>
      <span></span>
    </label>
  </Box>
  )
}

const buttonStyle = css `
.menu-checkbox {
  display: none;
  &:checked ~ .menu-button > span {
    transform: rotate(45deg);
  },
  &:checked ~ .menu-button > span::before {
    top: 0;
    transform: rotate(0);
  },
  &:checked ~ .menu-button > span::after {
    top: 0;
    transform: rotate(-90deg);
  },
},
.menu-button {
  display: block;
  position: relative;
  width: 26px;
  height: 26px;
  cursor: pointer;
  & > span, & > span::before, & > span::after{
    transition: .3s;
    display: inline-block;
    position: absolute;
    height: 3px;
    width: 100%;
    @media (prefers-color-scheme: dark) {
      background-color: t("colors.icon_dark");
    },
    @media (prefers-color-scheme: light) {
      background-color: t("colors.icon_light");
    }
  },
  & > span::before {
    content: '';
    top: -8px;
  },
  & > span::after {
    content: '';
    top: 8px;
  },
},
`