import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const Single = () => {
  const {id}=useParams()
  const details=useSelector((store)=>store.form.data)
   const data=details.filter((item)=>item.id==id)

   if(!data[0]){
    return <h1>Please Fill All the Credential</h1>
      }



const {Name,Education,skill,Gender,PhoneNumber,Email}= data[0]

 
  return (
    <div>
        <div style={{display:"flex", flexDirection:"column", border:"1px solid black",backgroundColor:"Highlight"}}

>
                <h3>{Name}</h3>
                <h3>{Education}</h3> 
                <div style={ {display:"flex", width:"100%", justifyContent:"center",alignItems:"center",gap:"10px"}}>
            <h6> Skills</h6>
            {skill&&skill.map(item=><h3>{item}</h3>)}
          </div>
         <h3>{Gender}</h3> <h3>{PhoneNumber}</h3> <h3>{Email}</h3>
      </div>


    </div>
  )
}
