import React, { useEffect, useState } from 'react'
import userAuth from '../../appwrite/userconfig';
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux'
import {addToProjects} from '../store/projectPostSlice'
import projectconfig from '../../appwrite/projectConfig';
import ProjectCard from '../componenets/ProjectCard';

function Home() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [gotPost, setGotPost] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.userStatus.value)
  useEffect(()=>{
    if (userStatus){
      setUserLoggedIn(true)
      projectconfig.getPostsProject()
      .then((posts)=>{
        if(posts){
          setGotPost(false);
          dispatch(addToProjects(posts))
          // console.log(posts)
        }
      })
    } else {
      navigate('/login')
    }
  },[])
  return !gotPost ?(
    <div className='bg-TBlueLight h-full rounded-md'>
      <ProjectCard />
    </div>
  ): (
    <div className='bg-TBlueLight h-full rounded-md'>Loading posts....</div>
  )
}

export default Home