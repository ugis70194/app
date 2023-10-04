import React from 'react'
import { typeBackgroundColor } from '../../../_utils/functions'
import { Box, HStack, Text, styled, css } from '@kuma-ui/core'
import SampleViewer from './_sampleViewer'

export interface Detail {
  title: string,
  type?: string,
  description: string,
  published_at: string,
  genres?: string[],
  creator: string[],
  size?: string,
  page?: number,
  sampleCount: number,
  r18?: boolean,
  event?: string,
}

function concatString(string_array: string[]): string{
  let res = "";
  for(const str of string_array) res += (str + ', ');
  return res.slice(0, res.length-2);
}

const Divider = styled("div")`
border: solid dimgray;
border-width: 5px 0 0;
height: 0;
width: 100%;
display: inline-block;
padding: 3px;
`;

const Td = styled("td")`
border: 1px solid gray;
padding: 8px;
`
const Tr = styled("tr")`
background: gainsboro;
:nth-child(even){
  background: whitesmoke;
}
`

export default function HomeMock({params}: {params: {detail: Detail, imgURLs: string[]}}){
  const detail = params.detail;
  const imgURLs = params.imgURLs;
  return (
    <Box maxWidth={'1200px'} margin={'0 auto'}>
      <HStack gap={[4,8]}>
        {
          detail.type ? 
          <Box bg={typeBackgroundColor(detail.type)} p={8} color={'white'}>
              {detail.type}
            </Box> 
          : <></>
        }
        {
          detail.r18 ? 
          <Box bg={'pink'} p={8} color={'white'}>R-18</Box>
          : <></>
        }
      </HStack>
      {
        detail.genres ? 
        <HStack>
            {
              detail.genres.map((genre) => <Text key={genre}>#{genre}</Text>)
            }
          </HStack>
        : <></>
      }
      <Divider />
      <Text fontSize={['1.5em', '2em']} fontWeight={'bold'}>{detail.title}</Text>
      <SampleViewer imgURLs={imgURLs} />
      <Divider />
      <Box>
        <Text fontSize={['1.2rem', '1.5rem']} fontWeight={'bold'}>作品説明/コメント</Text>
        <Text>
          {detail.description}
        </Text>
      </Box>
      <Divider />
      <Box alignContent={'center'}>
      <table className={css `display:table; margin:auto;`}>
        <tbody>
          <Tr>
            <Td>作者</Td>
            <Td>{concatString(detail.creator)}</Td>
          </Tr>
          <Tr>
            <Td>公開日</Td>
            <Td>{detail.published_at}</Td>
          </Tr>
          {
            detail.size ? 
            <Tr>
              <Td>版型・メディア</Td>
              <Td>{detail.size}</Td>
            </Tr>
            : <></>
          }
          {
            detail.page ?
            <Tr>
              <Td>ページ数・CG数・曲数</Td>
              <Td>{detail.page}</Td>
            </Tr>
            : <></>
          }
          {
            detail.event ? 
            <Tr>
              <Td>イベント</Td>
              <Td>{detail.event}</Td>
            </Tr>
          : <></>
          }
        </tbody>
      </table>
      </Box>
    </Box>
  )
}