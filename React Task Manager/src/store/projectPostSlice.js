import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: [],
}


const projectPostSlice = createSlice({
  name: "projectPosts",
  initialState,
  reducers:{
    addToProjects : (state, action)=>{
      state.value.push(action.payload)
    }
  }
})


export const {addToProjects} = projectPostSlice.actions

export default projectPostSlice.reducer