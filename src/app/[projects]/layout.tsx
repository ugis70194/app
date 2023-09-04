
import React, { createContext, useReducer } from 'react'
import Banner from './_banner/_banner'
import Menu from './menu/_menu'
import ThumbnailTable from './products/_thumbnailTable'
import { css } from '@kuma-ui/core'
import Link from 'next/link'

interface contextType {
  R18on: boolean,
  R18Switch: React.DispatchWithoutAction|undefined
}

export const R18Context = createContext<contextType>(
                          {R18on:false, R18Switch:undefined})

export default function ProjectsLayout({
    children, 
    params
}:{
  children: React.ReactNode,
  params : {projects: string}
}) {
  const [R18on, R18Switch] = useReducer((state) => (!state), false);
  const provideValue = {R18on, R18Switch}
  return (
    <>
      <Banner>
        <Link href="/" className={css `text-decoration:none; height:100%; font-weight: bold; margin-right: auto;`}>抱華郷</Link>
        <R18Context.Provider value={provideValue}>
          <div></div>
        </R18Context.Provider>
        <Menu projectName={params.projects}/>
      </Banner>
      <main>
        {children}
      </main>
    </>
  )
}
