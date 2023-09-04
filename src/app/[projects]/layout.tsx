'use client'

import React, { createContext, useReducer } from 'react'
import Banner from './_banner/_banner'
import Menu from './_banner/menu/_menu'
import { css } from '@kuma-ui/core'
import Link from 'next/link'

export const R18StateContext = createContext<{R18on: boolean}>({ R18on: false });
export const R18DispatchContext = createContext<
            {R18Switch: React.DispatchWithoutAction|undefined}>({R18Switch: undefined});

export default function ProjectsLayout({
    children, 
    params
}:{
  children: React.ReactNode,
  params : {projects: string}
}) {
  const [state, dispatch] = useReducer((state) => (!state), false);
  return (
    <R18StateContext.Provider value={{R18on: state}}>
      <Banner>
        <Link href="/" className={css `text-decoration:none; height:100%; font-weight: bold; margin-right: auto;`}>抱華郷</Link>
          <R18DispatchContext.Provider value={{R18Switch: dispatch}}>
            <div></div>
          </R18DispatchContext.Provider>
        <Menu projectName={params.projects}/>
      </Banner>
      <main>
        {children}
      </main>
    </R18StateContext.Provider>
  )
}
