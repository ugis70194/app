import React, { use, Suspense } from 'react'
import { jsonLoader, typeBackgroundColor } from '../../../_utils/functions'
import { URL_PREFIX } from '../../../_utils/variables'
import { Box, HStack, Text, styled, css } from '@kuma-ui/core'
import SampleViewer from './_sampleViewer'

interface Detail {
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

function sampleURLs(productPath: string, sampleCount: number): string[]{
  let res:string[] = [];
  for(let i = 1; i <= sampleCount; i++){
    res.push(`${productPath}/sampleImages/${i}.jpg`);
  }
  return res;
}

async function fetchDetail(project: string, title: string): Promise<Detail> {
  return await jsonLoader(`${URL_PREFIX}/api/${project}/${title}/detail.json`);
}

function fetchImgURLs(project: string, title: string, sampleCount: number): string[] {
  return [`/api/${project}/${title}/cover.jpg`]
          .concat(sampleURLs(`/api/${project}/${title}`, sampleCount));
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

function Main({project, title}: {project: string, title: string}){
  const detail: Detail = use(fetchDetail(project, title));
  const imgURLs = fetchImgURLs(project, title, detail.sampleCount);

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


export default function Home({params}: {params : {projects: string, product: string}}){
  const project = params.projects;
  const title = params.product;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Main project={project} title={title} />
    </Suspense>
  )
}