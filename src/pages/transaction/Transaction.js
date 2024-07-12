import React from 'react'
import "../transaction/Transaction.css"
import Table from '../../components/table/Table'
import axios from '../../services/axios'
import { useEffect,useState } from 'react'
function Transaction() {
  let transactionData=["Name","Items","Total_price","Reward","Date"]
  const [data,setData]=useState([])
  const getAllTransaction=async()=>{
    try{
      const Response=await axios.get("http://localhost:5000")
      setData(Response.data.data)
      return Response.data.data
    }catch(err){
console.log(err)
    }
  
 // return JSON.parse(JSON.stringify(response)) 
  }
  
  useEffect(()=>{
      getAllTransaction()
  },[])

  return (
    <><Table Theader={transactionData} Title={"Transaction"} data={data}/></>
  )
}

export default Transaction