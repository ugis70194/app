'use client'

import React, { createContext, useReducer } from 'react'

interface contextProps {
  R18on: boolean,
  toggle: React.DispatchWithoutAction | undefined
}

const initialValue = {
  R18on: false,
  toggle: undefined
}

export const R18Context = createContext<contextProps>(initialValue);

export default function R18ContextProvider({children}: {children: React.ReactNode}) {
  const [state, dispatch] = useReducer((state) => (!state), false);
  const contextValue = {R18on: state, toggle: dispatch}
  return (
    <R18Context.Provider value={contextValue}>
      {children}
    </R18Context.Provider>
  )
}