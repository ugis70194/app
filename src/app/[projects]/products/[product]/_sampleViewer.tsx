'use client'

import React, { useReducer } from 'react'
import Image from 'next/image'
import { Box, Text, VStack} from '@kuma-ui/core'

function reducer(pageNumber: number, args: {maxPage: number, control: string | undefined}){
  if(args.control === "next"){
    pageNumber = (pageNumber+1) % args.maxPage;
  }
  if(args.control === "prev"){
    if(pageNumber === 0){
      pageNumber = args.maxPage - 1;
    }else{
      pageNumber = pageNumber - 1;
    }
  }
  return pageNumber; 
}

export default function SampleViewer({ imgURLs }:{imgURLs: string[]}){
  const [pageNumber, controler] = useReducer(reducer, 0);
  const maxPage = imgURLs.length;
  return (
    <VStack justifyContent={'center'} margin={[0,0,0,0]}>
      <Box position={'relative'} width={'100vw'} maxWidth={'600px'} height={'80vh'} margin={'auto'} justifyContent={'center'}
      >
        <Image src={imgURLs[pageNumber]} alt={`page ${pageNumber+1}`} 
                fill={true} 
                objectFit='contain'
        />
        <Box position={'absolute'} top={0} left={0} height={'100%'} width={'50%'} 
            onClick={() => controler({maxPage:maxPage, control:'prev'})}
            bg={'green'} opacity={'0.2'} zIndex={2}
        ></Box>
        <Box position={'absolute'} top={0} left={'50%'} height={'100%'} width={'50%'} 
            onClick={() => controler({maxPage:maxPage, control:'next'})}
            bg={'red'} opacity={'0.2'} zIndex={2}
        ></Box>
      </Box>
      <Text textAlign={'center'}>{`${pageNumber+1}/${maxPage}`}</Text>
    </VStack>
  )
}