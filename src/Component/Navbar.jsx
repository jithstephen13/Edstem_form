import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div style={{height:"40px" ,backgroundColor:"ThreeDHighlight",color:"white", display:"flex",justifyContent:"center",alignItems:"center"}}>

        <h2 onClick={()=>navigate("/")}>Home</h2>
    </div>
  )
}
