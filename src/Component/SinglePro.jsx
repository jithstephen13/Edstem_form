import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SinglePro = ({id,Name,Education,
skill,
Gender,
PhoneNumber,
Email}) => {

    const navigate=useNavigate()
  return (
    <div style={{display:"flex", flexDirection:"column", border:"1px solid black",backgroundColor:`${Math.floor(Math.random() * 16)}`}} onClick={()=> navigate(`/single/${id}`)}
    >
 <p>{Name}</p>
 <p>{Education}</p> 
<p>{PhoneNumber}</p> 
 <p>{Email}</p>
    </div>
  )
}
