import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import statusReducers from './authSlice'
import projectReducers from './projectPostSlice'

const rootReducer = combineReducers({
  userStatus: statusReducers,
  projectPosts: projectReducers
});

export const store = configureStore({
  reducer: rootReducer
})