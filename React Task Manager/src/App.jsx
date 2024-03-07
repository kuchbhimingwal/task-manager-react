import { useEffect, useState } from 'react'
import userAuth from "../appwrite/userconfig"
import projectconfig from '../appwrite/projectConfig';
import './App.css'
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {login, logout} from './store/authSlice'
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Sidenav from './componenets/Sidenav';
import Heading from './componenets/Heading';

function App() {
const [loading, setLoading] = useState(true);
const dispatch = useDispatch();
const location = useLocation()

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
    <div className='ml-10 mr-10'>
      {location.pathname != "/login" && location.pathname != "/signup" ? <Header/> : null}
      <div className='flex'>
      {location.pathname != "/login" && location.pathname != "/signup" ? <Sidenav/> : null}
        <div className='flex flex-col w-full'>
        {location.pathname != "/login" && location.pathname != "/signup" ? <Heading/> : null}
          <Outlet />
        </div>
      </div>
      {location.pathname != "/login" && location.pathname != "/signup" ? <Footer/> : null}
    </div>
    </>
  ): (
    <div>loading</div>
  )
}

export default App
