
import React, { useState } from 'react'
import { AddData } from '../Redux/formSlice'
import { useDispatch, useSelector } from 'react-redux'
import store from '../Redux/store'
import { SinglePro } from '../Component/SinglePro'

export const Home = () => {
   const [data,setData]=useState({
    Name:"",
    Education:"",
    skill:[],
    Gender:"",
    PhoneNumber:"+123456789",
    Email:""
   })

   const dispatch=useDispatch()
const details=useSelector((store)=>store.form.data)
    const [skill,setSkill]=useState("")

    const handileSkillChange=(e)=>{
        e.preventDefault()

        setSkill(e.target.value)
       

    }


    const handileSkillAdd=(e)=>{
        e.preventDefault()
       let s= data.skill
       s.push(skill)
      setData({...data,skill:s}) 
      setSkill("")
      
    }

    const handleFormChange=(e)=>{
        const {name,value}=e.target
        setData({...data,[name]:value, id: Date.now()})
       
    }
       
    const  handileSubmit=(e)=>{
        e.preventDefault()
         dispatch(AddData(data))
        setData({
          Name:"",
          Education:"",
          skill:[],
          Gender:"",
          PhoneNumber:"+123456789",
          Email:""
         }) 

    }
console.log(details)


  return (
    <div>
        
        <form action=""  style={{display:"flex",flexDirection:"column", width:"40%",margin:"auto",border:"1px solid black", padding:"30px"}} onSubmit={handileSubmit}>
             
             <input type="text" placeholder='Name' value={data.Name} name='Name' onChange={handleFormChange}  required/>

             <select name='Education' onChange={handleFormChange}  required >
                <option value="">select Education </option>
                <option value="+2">+2</option>
                <option value="Graduate">Graduate </option>


             </select>
              
             <div>
              <div style={ {display:"flex", width:"100%", justifyContent:"center",alignItems:"center",gap:"10px"}}>
                <h6> Skills</h6>
                {data.skill&&data.skill.map(item=><p>{item}</p>)}
              </div>
                
                <input type="text" placeholder='Add your Skills' value={skill} onChange={handileSkillChange} /> <button onClick={handileSkillAdd}>Add</button>
             </div>
               
               <div>
                <label htmlFor=""> Male</label>
                <input type="radio" value={"male"} name="Gender" onChange={handleFormChange}  />
                <label htmlFor=""> Female</label>
                <input type="radio" value={"female"} name="Gender" onChange={handleFormChange}  />
               </div>

               <div>
                      <input type="text" placeholder='PhoneNumber' value={data.PhoneNumber} name="PhoneNumber"  required onChange={handleFormChange}  />
               </div>
               <div>
                      <input type="email" placeholder='Email' name="Email" value={data.Email} onChange={handleFormChange}  required />
               </div>

              <button type="submit">Submit</button>



        </form>


             <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                           {details&& details.map((item,idx)=> <SinglePro key={idx}  {...item}/> )}
             </div>


    </div>
  )
}
