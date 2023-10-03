import React from 'react'
import Banner from './_banner/_banner'
import Menu from './_banner/menu/_menu'
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
        <Link href="/" className={css `text-decoration:none; height:100%; font-weight: bold; margin-right: auto; `}>Home</Link>
        <R18Switch />
        <Menu projectName={params.projects}/>
        <div/>
      </Banner>
      <main>
        {children}
      </main>
    </R18ContextProvider>
  )
}
