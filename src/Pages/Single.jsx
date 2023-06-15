import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const Single = () => {
  const {id}=useParams()
  const details=useSelector((store)=>store.form.data)
   const data=details.filter((item)=>item.id==id)
const {Name,Education,
  skill,
  Gender,
  PhoneNumber,
  Email}= data[0]

  console.log(id)
  return (
    <div>
 <div style={{display:"flex", flexDirection:"column", border:"1px solid black",backgroundColor:"Highlight"}}

>
<p>{Name}</p>
<p>{Education}</p> 
<div style={ {display:"flex", width:"100%", justifyContent:"center",alignItems:"center",gap:"10px"}}>
            <h6> Skills</h6>
            {skill&&skill.map(item=><p>{item}</p>)}
          </div>
<p>{Gender}</p> <p>{PhoneNumber}</p> <p>{Email}</p>
</div>


    </div>
  )
}
