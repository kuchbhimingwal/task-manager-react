import { useEffect, useState } from 'react'
import userAuth from "../appwrite/userconfig"
import './App.css'
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {login, logout} from './store/authSlice'
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Sidenav from './componenets/Sidenav';

function App() {
const [loading, setLoading] = useState(true);
const dispatch = useDispatch();
const location = useLocation()

useEffect(()=>{
  console.log(location.pathname)
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
    <div className='ml-10 mr-10'>
      {location.pathname != "/login" && location.pathname != "/signup" ? <Header/> : null}
      <div className='flex'>
        <Sidenav />
        <Outlet />
      </div>
      {location.pathname != "/login" && location.pathname != "/signup" ? <Footer/> : null}
    </div>
    </>
  ): (
    <div>loading</div>
  )
}

export default App
