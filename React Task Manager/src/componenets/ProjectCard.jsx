import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function ProjectCard() {
  const post = useSelector((state)=> state.projectPosts.value.documents)
  console.log(post)
  return (
    <div className='flex flex-wrap '>
      {post.map((post) => (
        <div key={post.$id} className='w-1/4 bg-white m-5 rounded-md shadow-md'> 
          <h3 className='text-left m-2'>{post.name}</h3>
          <p className='w-auto bg-pink-200 m-8 rounded-md'>{post.discription}</p>
          <p className='w-auto bg-yellow-200 m-8 rounded-md'>{post.$createdAt}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectCard