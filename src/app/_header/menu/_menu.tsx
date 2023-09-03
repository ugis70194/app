import React, { useReducer } from 'react'
import MenuButton from './_menuButton'

function reducer(state: boolean){
  return !state;
}

export default function Menu(){
  const [isOpen, toggle] = useReducer(reducer, false);
  return (
    <>
      <MenuButton isOpen={isOpen} toggle={toggle} />
    </>
  )
}