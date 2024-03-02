import {configureStore} from '@reduxjs/toolkit'
import statusReducers from './authSlice'

export const store = configureStore({
  reducer: {
    userStatus : statusReducers,
  },
})