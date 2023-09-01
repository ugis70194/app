import { URL_PREFIX } from './_utils/variables'
import { thumbnail } from './_interfaces/interfaces'
import { Box, Text, HStack, css } from "@kuma-ui/core";
import Image from 'next/image'

async function loadTextData(title: string){
  const res = await fetch(`${URL_PREFIX}/${title}/thumbnail.json`);
  return res.json();
}

function typeBackgroundColor(type: string){
  switch(type){
    case 'Illust': return 'red'
    case 'Novel': return 'green'
  }
}

function LoadingTypeBox() {
  return (
    <Box p={8} bg={'gray'} height={'2rem'} width={'6rem'} color='white'></Box>
  )
}  

export default async function Thumbnail({title}: {title: string}) {
  const data: thumbnail = await loadTextData(title);

  return (
    <Box p={4}>
      <HStack>
        <Box p={4} bg={typeBackgroundColor(data.type)} color='white'>{data.type}</Box>
        {data.r18 && <Box p={8} bg='pink' color='white'>R-18</Box>}
      </HStack>
      <Text p={4} textDecoration='underline'>{data.genre}</Text>
      <Box position={'relative'} minHeight={'33vh'} p={0} m={0} bg={'silver'}>
        <Image src={`/${title}/cover.jpg`} style={{objectFit: 'contain'}} fill={true} alt={title} />
      </Box>
      <Text p={8} fontWeight='bold'>{data.title}</Text>
      <Box p={8} bg='lightgray' as='button'>サンプル</Box>
    </Box>
  )
}