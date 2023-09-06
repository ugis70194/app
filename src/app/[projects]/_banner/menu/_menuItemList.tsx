import { URL_PREFIX } from '../../_utils/variables'
import { jsonLoader } from '../../_utils/functions'
import React from 'react'
import { Box, css } from '@kuma-ui/core'
import Link from 'next/link'


export default async function MenuItemList({projectName}: {projectName: string}){
  const productTypes: {data: string[]} = await jsonLoader(`${URL_PREFIX}/${projectName}/general/productTypes.json`);

  return (
    <ul className={css `marign: 0; padding: 0`}>
    {
      (productTypes.data).map((type) => (
        <li key={type} className={css `list-style: none`} >
          <Link href={`/${projectName}/products/${type}`} className={css `text-decoration: none`} >
            <Box height={'10vh'} width={'100%'} m={0} padding={[4,0]}
                  textAlign={'center'} fontSize={'7vh'} fontWeight={'bold'} color='white'>{type}</Box>
          </Link>
        </li>
      ))
    }
    </ul>
  )
}