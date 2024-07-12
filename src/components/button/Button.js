import React, { useState } from 'react'
import PropType from "prop-types"
import './Button.css'
function Button(props) {
    const {classname,lebel,handleClick,type}=props
    const[overdata,setOverdata]=useState("")

const handleHover=()=>{
    if(classname==='btn'){
        setOverdata("out-line")
        console.log(overdata.split(" ").includes("active"))
    }
}
const handleleave=()=>{
    setOverdata("") 
}
  return (
   <><button className={`${classname} gap_right ${classname.split(" ").includes("active")?"":overdata}`} onClick={handleClick} type={type} onMouseOver={handleHover} onMouseLeave={handleleave}>{lebel}</button></> 
  )
}
Button.PropType={
    classname:PropType.string,
    lebal:PropType.string.isReqired,
    handleclick:PropType.func,
    type:PropType.string
}
export default Button