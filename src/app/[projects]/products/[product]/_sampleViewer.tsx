'use client'

import React, { useReducer } from 'react'
import Image from 'next/image'
import { Box, Text, VStack, HStack, styled, css } from '@kuma-ui/core'

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

const Arrow = styled("i")`
border: solid black;
border-width: 0 3px 3px 0;
display: inline-block;
padding: 3px;
`;

export default function SampleViewer({ imgURLs }:{imgURLs: string[]}){
  const [pageNumber, controler] = useReducer(reducer, 0);
  const maxPage = imgURLs.length;
  return (
    <VStack justifyContent={'center'} width={'100%'} margin={'auto'}>
      <Box position={'relative'} width={'100%'} maxWidth={'600px'} height={'80vh'} margin={'auto'} justifyContent={'center'}
      >
        <Image src={imgURLs[pageNumber]} alt={`page ${pageNumber+1}`} 
                fill={true} 
                style={{objectFit:'contain'}}
        />
        <Box position={'absolute'} top={0} left={'5%'} height={'100%'} width={'45%'} 
            onClick={() => controler({maxPage:maxPage, control:'prev'})}
            zIndex={2}
        ></Box>
        <Box position={'absolute'} top={0} left={'50%'} height={'100%'} width={'45%'} 
            onClick={() => controler({maxPage:maxPage, control:'next'})}
            zIndex={2}
        ></Box>
      </Box>
      <HStack padding={[16,24,36]} justifyContent={'center'} alignItems={'center'} height={'2rem'} gap={[24,36,48]}>
        <Box onClick={() => controler({maxPage:maxPage, control:'prev'})}>
          <Arrow className=
          {css `
          transform: rotate(135deg);
          -webkit-transform: rotate(135deg);
          `}
          />
        </Box>
        <Text fontSize={['1.0rem', '1.5rem']} textAlign={'center'}>{`${pageNumber+1}/${maxPage}`}</Text>
        <Box onClick={() => controler({maxPage:maxPage, control:'next'})}> 
          <Arrow className=
          {css `
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
          `}
          />
        </Box>
      </HStack>
    </VStack>
  )
}