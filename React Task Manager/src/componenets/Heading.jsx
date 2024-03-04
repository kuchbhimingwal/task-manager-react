import React from 'react'
import { useLocation } from 'react-router-dom'

function Heading() {
  const location = useLocation();
  return (
    <div className='w-full ml-10'>
      <h1 className='text-left text-black text-3xl font-medium leading-tight tracking-tigh'>Task Management</h1>
      <h3 className='text-left'>{location.pathname}</h3>
    </div>
  )
}

export default Heading