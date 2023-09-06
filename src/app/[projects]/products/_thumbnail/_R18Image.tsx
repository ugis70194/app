'use client'

import React, { useContext } from 'react'
import { R18Context } from '../../_r18ContextProvider';
import Image from 'next/image'

export default function R18Image(
  {projectName, title}:
  {projectName: string, title: string})
{
  const { R18on } = useContext(R18Context);
  const imageSrc = R18on ? `/${projectName}/${title}/cover.jpg` : `/icons/R-18_icon.svg`;

  return (
    <Image src={imageSrc} style={{objectFit: 'contain'}} fill={true} alt={title} />
  )
}