import React from 'react'
import "./Reward.css"
import Table  from '../../components/table/Table'
//import {TransactionServices} from '../../services/api/transaction.service'
import { useEffect,useState } from 'react'
import axios from '../../services/axios'
//import { object } from 'prop-types'
function Reward() {
  let rewardData=["Name","Reward/month","Total"]
  const [data,setData]=useState({})
  const getAllTransaction=async()=>{
    try{
      const Response=await axios.get("http://localhost:5000")
      const obj={}
      //
      //toatalReward:0
     await Response.data.data.forEach(element => {
      if(obj[element.name]){
        obj[element.name].reward=obj[element.name].reward+element.Reward
        obj[element.name].toatalReward=obj[element.name].toatalReward+element.Reward
      }else{
        obj[element.name]={reward:element.Reward,toatalReward:element.Reward}
      }
      
     });
      setData(obj)
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
    <><Table Theader={rewardData} Title={"Reward Pints"} data={data}/></>
  )
}

export default Reward