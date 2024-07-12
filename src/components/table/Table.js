
import React from 'react'
import "./Table.css"
import moment from 'moment'
function Table(props) {
  return (
    <div className="container mt-3">

  <table className="table table-striped">
    <thead>
    <tr>
        {props.Theader.map((element,index)=>{
        return( 
        <>
         <th key={index}>{element}</th>
          </>) 
        })}
       </tr>
      
    </thead>
    <tbody>
      {props.Title==="Transaction"&&
       props.data.map(function(element,index){
          return (  <>
          <tr key={index}>
            <td>{element.name}</td>
            <td>{element.Items}</td>
            <td>{element.Total_price}</td>
            <td>{element.Reward}</td>
            <td>{moment(element.Date).format("DD/MM/YYYY")}</td>
          </tr>
         </> )
        
       })
      }
     { props.Title==="Reward Pints"&&
    Object.keys(props.data).map(function(element,index){
        return (  <>
        <tr key={index}>
          <td>{element}</td>
          <td>{Math.round(props.data[element].reward/3)}</td>
          <td>{props.data[element].toatalReward}</td>
        </tr>
       </> )
     })}
    </tbody>
  </table>
</div>
  )
}

export default Table


