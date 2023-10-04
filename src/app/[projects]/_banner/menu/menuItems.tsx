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
  <Box className={css `
    .menu-checkbox:checked ~ .menu-items {
      transform: translateY(0);
    }
  `}>
    <input type="checkbox" id="menu-toggle" className='menu-checkbox' />
    <label htmlFor="menu-toggle" className='menu-button'>menu</label>
    <Box
      position={'relative'}
      transform={'translateY(-200%)'}
      transition={'.5s'}
      height={'90vh'}
      className='menu-items'  
    >
      <k.ul 
        zIndex={20} m={'auto'} 
        paddingLeft={'1rem'} paddingRight={'1rem'}>
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
  </Box>
  )
}