import React from 'react'
import Banner from './_banner/banner'
import Menu from './_banner/_menu/menu'
import R18ContextProvider from './_r18ContextProvider'
import R18Switch from './_banner/_r18switch'
import { css } from '@kuma-ui/core'
import Link from 'next/link'

export default function ProjectsLayout({
    children, 
    params
}:{
  children: React.ReactNode,
  params : {projects: string}
}) {
  
  return (
    <R18ContextProvider>
      <Banner>
        <Link href="/" className={css `text-decoration:none; height:100%; font-weight: bold; margin-right: auto;`}>抱華郷</Link>
          <R18Switch />
        <Menu projectName={params.projects}/>
      </Banner>
      <main>
        {children}
      </main>
    </R18ContextProvider>
  )
}
