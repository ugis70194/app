import { URL_PREFIX } from './_utils/variables'
import { thumbnail } from './_interfaces/interfaces'
import { Box, Text, HStack, Flex, VStack } from "@kuma-ui/core";
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

export default async function Thumbnail({title}: {title: string}) {
  const data: thumbnail = await loadTextData(title);

  return (
    <Box>
      <HStack>
        <Box p={8} bg={typeBackgroundColor(data.type)} color='white'>{data.type}</Box>
        {data.r18 && <Box p={8} bg='pink' color='white'>R-18</Box>}
      </HStack>
      <Text p={8} textDecoration='underline'>{data.genre}</Text>
      <Flex justify='center' alignItems="center">
        <VStack>
          <Image src={`/${title}/cover.jpg`} width={210} height={297} alt={title} />
          <Text p={8} fontWeight='bold'>{data.title}</Text>
        </VStack>
      </Flex>
      <Box p={8} bg='lightgray' as='button'>サンプル</Box>
    </Box>
  )
}