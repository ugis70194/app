import React from 'react'
import { Box, Text, css } from '@kuma-ui/core'

export default function R18Switch() {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'} 
      textAlign={'center'}
      width={'6rem'}
      height={'3rem'}
      className={buttonStyle}
    >
      <input type="checkbox" id="r18-toggle" className='r18-checkbox' />
      <label htmlFor="r18-toggle" className='r18-button'>
        <Text 
          m={0}
          lineHeight={'3rem'}
          className={css `user-select: none;`} 
          bgColor={'transparent'}
        >
          R-18
        </Text>
      </label>
    </Box>
  )
}

const buttonStyle = css `
.r18-checkbox {
  display: none;
  @media (prefers-color-scheme: dark) {
    &:checked ~ .r18-button {
      background-color: t("colors.r18_dark");
    }
  },
  @media (prefers-color-scheme: light) {
    &:checked ~ .r18-button {
      background-color: t("colors.r18_light");
    }
  }
},
.r18-button {
  cursor: pointer;
  display: inline-block;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  @media (prefers-color-scheme: dark) {
    background-color: t("colors.disabled_dark");
    color: t("colors.text_dark_body");
  },
  @media (prefers-color-scheme: light) {
    background-color: t("colors.disabled_light");
    color: t("colors.text_light_body");
  },
},
`