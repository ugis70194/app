import React from 'react'
import Banner from '../../_banner/banner'
import Menu from '../../_banner/_menu/menu';
import R18Switch from '../../_banner/_switch/r18switch';
import Thumbnail from './thumbnail';
import { thumbnail } from './thumbnail';
import { css } from '@kuma-ui/core'

export default function ThumbnailForSwitchTest(
  {thumbnailData, project}: 
  {thumbnailData: thumbnail, project: string})
{
  return (
    <div
      className={imgStyle} 
    >
    <div id="te">
      <Banner>
        <R18Switch />
        <Menu project={project} />
        <div />
      </Banner>
      <Thumbnail thumbnailData={thumbnailData} project={project} />
    </div>
    </div>
  )
}

const imgStyle = css `
img[class=invisible] {
  display: none;
},
img[class=visible] {
  display: inline;
},
div[id=te]:has(input[class=r18-checkbox]:checked) img[class=invisible] {
  display: inline;
},
div[id=te]:has(input[class=r18-checkbox]:checked) img[class=visible] {
  display: none;
}
`

