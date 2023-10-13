import React, { use } from 'react'
import { Box, css, k } from '@kuma-ui/core'
import Link from 'next/link'
import { jsonLoader } from '../../../_utils/functions'
import { URL_PREFIX } from '../../../_utils/variables'

async function fetchProductTypes(project: string): Promise<string[]> {
  return await jsonLoader(`${URL_PREFIX}/api/${project}/general/productTypes.json`);
}

export default function MenuItems({
  project
}:{
  project: string,
}){
  //const productTypes = use(fetchProductTypes(project))
  const productTypes = ['ALL', 'イラスト', 'マンガ', '小説']
  return (
    <Box
      zIndex={20}
      position={'absolute'}
      transition={'.5s'}
      width={'calc(100vw - 32px)'}
      height={'90vw'}
      className='menu-items'  
    >
      <k.ul 
        m={'auto'} 
        paddingLeft={0} 
        paddingRight={0}>
      {
        (productTypes).map((type) => (
          <li key={type} className={css `list-style: none`} >
            <Link href={`/${project}/products/${type}`}>
              <Box 
                width={'100%'} 
                textAlign={'center'} 
                paddingTop={['0.75rem', '0.75rem', '1rem', '1rem']}
                paddingBottom={['0.75rem', '0.75rem', '1rem', '1rem']}
                fontSize={['1.5rem', '1.5rem', '2rem', '2rem']}
                >
                {type}
              </Box>
            </Link>
          </li>
        ))
      }
      </k.ul>
    </Box>
  )
}