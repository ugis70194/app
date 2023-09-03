import React, {createContext, useReducer } from 'react'
import MenuButton from './_menuButton'
import MenuInner from './_menuInner'

export const MenuContext = createContext<[boolean, React.DispatchWithoutAction|undefined]>([false, undefined]);

function reducer(state: boolean){
  return !state;
}

export default function Menu(){
  const [MenuOpen, toggle] = useReducer(reducer, false);
  return (
    <MenuContext.Provider value={[MenuOpen, toggle]}>
      <MenuButton />
      <MenuInner />
    </MenuContext.Provider>
  )
}