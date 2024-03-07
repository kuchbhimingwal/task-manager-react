import React, { useEffect, useState } from 'react'
import userAuth from '../../appwrite/userconfig';
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux'
import {addToProjects} from '../store/projectPostSlice'
import projectconfig from '../../appwrite/projectConfig';

function Home() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.userStatus.value)
  useEffect(()=>{
    if (userStatus){
      setUserLoggedIn(true)
      projectconfig.getPostsProject()
      .then((posts)=>{
        if(posts){
          dispatch(addToProjects(posts))
          console.log(posts)
        }
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