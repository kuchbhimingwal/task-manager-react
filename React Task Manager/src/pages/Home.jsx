import React, { useEffect, useState } from 'react'
import userAuth from '../../appwrite/userconfig';
import { useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux'

function Home() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.userStatus.value)
  useEffect(()=>{
    if (userStatus){
      setUserLoggedIn(false)
    } else {
      navigate('/login')
    }
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Home