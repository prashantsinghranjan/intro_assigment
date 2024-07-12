import React from 'react'
import "./Container.css"
import { Outlet } from 'react-router-dom'
import Headers from '../header/Header'
function Container() {
  return (
    <>
     <Headers/>
    <Outlet />
    </>
    
  )
}

export default Container