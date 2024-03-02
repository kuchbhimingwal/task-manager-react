import { useEffect, useState } from 'react'
import userAuth from "../appwrite/userconfig"
import './App.css'
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {login, logout} from './store/authSlice'

function App() {
const [loading, setLoading] = useState(true);
const dispatch = useDispatch();

useEffect(()=>{
  userAuth.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }else {
      dispatch(logout())
    }
  })
  .finally(()=> setLoading(false))
},[])
  return !loading ?(
    <>
    <div>
      <Outlet />
    </div>
    </>
  ): (
    <div>loading</div>
  )
}

export default App
