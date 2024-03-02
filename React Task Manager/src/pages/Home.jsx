import React, { useEffect, useState } from 'react'
import userAuth from '../../appwrite/userconfig';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

function Home() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const navigate = useNavigate();
  useEffect(()=>{
    userAuth.getCurrentUser().then((user) =>{
      if(user) {
        setUserLoggedIn(false)
      }
      else {
        navigate('/login')
      }
    })
  },[])
  return (
    <div>Home <p>{userLoggedIn}</p></div>
  )
}

export default Home