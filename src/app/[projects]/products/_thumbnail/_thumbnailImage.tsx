'use client'

import React, { useContext } from 'react'
import { R18StateContext } from '../../layout'
import Image from 'next/image'

export default function ThumbnailImage(
  {projectName, title, isR18}:
  {projectName: string, title: string, isR18: boolean})
{
  const { R18on } = useContext(R18StateContext);
  const imageSrc = (isR18 && !R18on) ? `/icons/R-18_icon.svg` : `/${projectName}/${title}/cover.jpg`;

  return (
    <Image src={imageSrc} style={{objectFit: 'contain'}} fill={true} alt={title} />
  )
}