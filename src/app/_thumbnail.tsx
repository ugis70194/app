import { URL_PREFIX } from './_utils/variables'
import { jsonLoader } from './_utils/functions'
import { thumbnail } from './_interfaces/interfaces'
import { Box, Text, HStack } from "@kuma-ui/core";
import Image from 'next/image'
import { Suspense } from 'react';

function typeBackgroundColor(type: string){
  switch(type){
    case 'Illust': return 'red'
    case 'Novel': return 'green'
  }
}

const  LoadingTypeBox = (<Box p={4} bg={'gray'} height={'2rem'} width={'6rem'} color='white'></Box>)

export default async function Thumbnail(
  {projectName, title}: 
  {projectName: string, title: string}) 
{
  const data: thumbnail = await jsonLoader(`${URL_PREFIX}/${projectName}/${title}/thumbnail.json`);

  return (
    <Box p={4}>
      <Suspense fallback={LoadingTypeBox}>
        <HStack>
          <Box p={4} bg={typeBackgroundColor(data.type)} color='white'>{data.type}</Box>
          {data.r18 && <Box p={8} bg='pink' color='white'>R-18</Box>}
        </HStack>
      </Suspense>
      <Text p={4} textDecoration='underline'>{data.genre}</Text>
      <Box position={'relative'} minHeight={'33vh'} p={0} m={0} bg={'silver'}>
        <Image src={`/${projectName}/${title}/cover.jpg`} style={{objectFit: 'contain'}} fill={true} alt={title} />
      </Box>
      <Text p={8} fontWeight='bold'>{data.title}</Text>
      <Box p={8} bg='lightgray' as='button'>サンプル</Box>
    </Box>
  )
}