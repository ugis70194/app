import { URL_PREFIX } from '../../_utils/variables'
import React, { useContext } from 'react';
import { MenuContext } from './_menu'
import { Box } from '@kuma-ui/core'
import { HeaderHeight } from '../_header'

async function loadTextData(title: string){
  const res = await fetch(`${URL_PREFIX}/${title}/thumbnail.json`);
  return res.json();
}


export default function MenuInner(){
  const [MenuOpen, toggle] = useContext(MenuContext);

  return(
    <>
    {
      !MenuOpen ? <></> :
      <Box
      position={'absolute'} top={HeaderHeight}
      height={'100vh'} width={'100vw'} m={0} p={0} zIndex={2147483647} 
      bg={'black'} opacity={0.5}  
      onClick={toggle}>

      </Box>
    }
    </>
  )
}