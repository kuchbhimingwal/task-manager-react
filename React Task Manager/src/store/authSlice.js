import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

const userStatusSlice = createSlice({
  name: "userStatus",
  initialState,
  reducers: {
    login: (state)=>{
      state.value = true
    },
    logout: (state)=>{
      state.value = false
    }
  }
})

export const {login, logout} = userStatusSlice.actions

export default userStatusSlice.reducer
