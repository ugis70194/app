import React,{ useEffect, useState } from 'react'
import { jsonLoader, typeBackgroundColor } from '../../_utils/functions'
import { URL_PREFIX } from '../../_utils/variables'
import { Box, HStack, Text } from '@kuma-ui/core'
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

function sampleURLs(productPath: string, sampleCount: number): string[]{
  let res: string[] = [];
  for(let i = 1; i <= sampleCount; i++){
    res.push(`${productPath}/sampleImages/${i}.jpg`);
  }
  return res;
}

export default function HomeMock({params}: {params: {detail: Detail, imgURLs: string[]}}){
  const detail = params.detail;
  const imgURLs = params.imgURLs;
  return (
    <Box>
      <HStack>
        {
          detail.type ? 
          <Box bg={typeBackgroundColor(detail.type)}>
              {detail.type}
            </Box> 
          : <></>
        }
        {
          detail.r18 ? 
          <Box bg={'pink'}>R-18</Box>
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
      <Text fontWeight={'bold'}>{detail.title}</Text>
      <SampleViewer imgURLs={imgURLs} />
      <Box>
        <Text>作品説明</Text>
        <Text>
          {detail.description}
        </Text>
      </Box>
      <table>
        <tbody>
          <tr>
            <td>作者</td>
            <td>{concatString(detail.creator)}</td>
          </tr>
          <tr>
            <td>公開日</td>
            <td>{detail.published_at}</td>
          </tr>
          {
            detail.size ? 
            <tr>
              <td>版型・メディア</td>
              <td>{detail.size}</td>
            </tr>
            : <></>
          }
          {
            detail.page ?
            <tr>
              <td>ページ数・CG数・曲数</td>
              <td>{detail.page}</td>
            </tr>
            : <></>
          }
          {
            detail.event ? 
            <tr>
              <td>イベント</td>
              <td>{detail.event}</td>
            </tr>
          : <></>
          }
        </tbody>
      </table>
    </Box>
  )
}