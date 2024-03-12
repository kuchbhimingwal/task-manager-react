import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


function ProjectCard() {
  const post = useSelector((state)=> state.projectPosts.value.documents)
  console.log(post)
  return (
    <div className='flex flex-wrap'>
      <h1>eqdeq</h1>
      {post.map((post) => (
        <div key={post.$id} className='w-1/4 '> 
          <h3>{post.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default ProjectCard