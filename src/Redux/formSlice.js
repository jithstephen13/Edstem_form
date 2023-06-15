import { createSlice } from "@reduxjs/toolkit"


const initialState={
    data:[]
}

const formSlice=createSlice({
    name:"form",
    initialState,
    reducers:{

        AddData:(state,action)=>{
        console.log(action.payload)
            state.data.unshift(action.payload)


            
        }

    }

})
export const  {AddData} = formSlice.actions
export default formSlice.reducer
