import "./Header.css"
import Button from "../../components/button/Button"
import { useState } from "react"
import { Link } from 'react-router-dom';
const Headers=()=>{
  const [activity,setActivity]=useState({Transaction:false,Reward:false})
  const transactionHandleClick=()=>{
    setActivity({Transaction:true,Reward:false})
  }
  const rewardHandleClick=()=>{
    setActivity({Transaction:false,Reward:true})
  }
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-secondary-subtle">
        <div className="container-fluid">
            <div className="avatar-container"><a className="logo" href="https://github.com/prashantsinghranjan/intro_assigment/blob/main/assigment_back/Dockerfile">P</a></div>
            <div>
            <Link to={'app/transaction'}>
                <Button 
                classname={`${activity.Transaction?"btn btn-outline-primary active":"btn"}`}
                type="button"
                lebel='Your Transaction'
                handleClick={transactionHandleClick}/>
             </Link>
            
            {/* Reward points per month for customer and total */}
            <Link to={'app/reward'}>
            <Button 
                classname={`${activity.Reward?"btn btn-outline-primary active":"btn"}`}
                lebel='Reward points'
                type="button"
                handleClick={rewardHandleClick}/>
            </Link>
            
            </div>
          
        </div>
      </nav>
        </>
    )
   
}
export default Headers
