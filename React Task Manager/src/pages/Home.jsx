import React, { useEffect, useState } from 'react'
import userAuth from '../../appwrite/userconfig';
import { useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux'
import projectconfig from '../../appwrite/projectConfig';

function Home() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.userStatus.value)
  useEffect(()=>{
    if (userStatus){
      setUserLoggedIn(true)
      projectconfig.getPostsProject()
      .then((posts)=>{
        if(posts) console.log(posts)
      })
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