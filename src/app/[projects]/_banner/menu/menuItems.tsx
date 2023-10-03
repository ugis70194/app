import React, { use } from 'react'
import { Box, css, k } from '@kuma-ui/core'
import Link from 'next/link'
import { jsonLoader } from '../../_utils/functions'
import { URL_PREFIX } from '../../_utils/variables'

async function fetchProductTypes(project: string): Promise<string[]> {
  return await jsonLoader(`${URL_PREFIX}/api/${project}/general/productTypes.json`);
}

export default function MenuItems({
  project
}:{
  project: string,
}){
  //const productTypes = use(fetchProductTypes(project))
  const productTypes = ["イラスト", "マンガ", "小説"]
  return (
    <k.ul width="100vw">
    {
      (productTypes).map((type) => (
        <li key={type} className={css `list-style: none`} >
          <Link href={`/${project}/products/${type}`} >
            <Box 
              height={'10vh'} width={'100%'} textAlign={'center'} 
              fontSize={['2rem', '2rem', '3rem', '4rem']} >
              {type}
            </Box>
          </Link>
        </li>
      ))
    }
    </k.ul>
  )
}