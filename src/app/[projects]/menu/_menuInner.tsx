'use client'

import { URL_PREFIX } from '../_utils/variables'
import { jsonLoader } from '../_utils/functions';
import React, { useEffect, useState } from 'react';
import { Box, css } from '@kuma-ui/core'
import { BannerHeight } from '../_banner'
import Link from 'next/link'

interface Props {
  isOpen: boolean
  toggle: React.DispatchWithoutAction
  projectName: string
}

export default function MenuInner({isOpen, toggle, projectName}: Props){
  const [workTypes, setWorkTypes] = useState<string[]>([])
  useEffect(() => {
    (async () => {
      const workTypes: {data: string[]} = await jsonLoader(`${URL_PREFIX}/${projectName}/general/workTypes.json`);
      setWorkTypes(workTypes.data);
    })();    
  },[])

  return(
      <Box
      position={'absolute'} top={BannerHeight} left={0}
      height={'100vh'} width={'100vw'} m={0} p={0} zIndex={999} 
      bg={'black'} opacity={0.8}  
      onClick={toggle}
      overflow={'scroll'}
      className={isOpen ? css `display: inline`: css `display: none`}
      >
        <ul className={css `marign: 0; padding: 0`}>
        {
          (workTypes).map((type) => (
            <li key={type} className={css `list-style: none`} >
              <Link href={`/${projectName}/${type}`} className={css `text-decoration: none`} >
                <Box height={'10vh'} width={'100%'} m={0} padding={[4,0]}
                      textAlign={'center'} fontSize={'7vh'} fontWeight={'bold'} color='white'>{type}</Box>
              </Link>
            </li>
          ))
        }
        </ul>
      </Box>
  )
}