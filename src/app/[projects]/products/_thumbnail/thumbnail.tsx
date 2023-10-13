import React from 'react';
import { typeBackgroundColor } from '../../../_utils/functions';
import { Box, Text, HStack, css } from "@kuma-ui/core";
import Image from 'next/image'
import Link from 'next/link'

export interface thumbnail {
  title: string
  type: string
  genre: string
  r18: boolean
}

export default function Thumbnail(
  {thumbnailData, project}: 
  {thumbnailData: thumbnail, project: string}) 
{
  return (
    <Box p={4}>
      <Link 
        href={`/${project}/products/${thumbnailData.title}/`} 
      >
        <Box 
          position={'relative'} 
          minHeight={'210px'} maxHeight={'297px'} 
          p={0} m={0} bg={'whitesmoke'}
        >
        { 
          thumbnailData.r18 ? 
          <Image
            src={`/icons/R-18_icon.svg`}
            alt='R18'
            style={{objectFit: 'contain'}}
            fill={true}
            className={thumbnailData.r18 ? 'visible' : 'invisible'}  
          /> 
          : ''
        }

          <Image 
            src={`/api/${project}/${thumbnailData.title}/cover.jpg`}
            alt={thumbnailData.title} 
            style={{objectFit: 'contain'}} 
            fill={true} 
            className={thumbnailData.r18 ? 'invisible' : ''}  
          />
        </Box>
        <Text p={8} fontWeight='bold'>{thumbnailData.title}</Text>
      </Link>
      <Box p={8} bg='lightgray' as='button'>サンプル</Box>
      
    </Box>
  )
}