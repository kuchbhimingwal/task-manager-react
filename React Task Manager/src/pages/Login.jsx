import React from 'react'
import { useForm } from 'react-hook-form'
import loginImg from '../assets/Group 23@2x.png'
import logo from '../assets/TASMANG@2x.png'
import { useNavigate } from 'react-router-dom'
import Input from '../componenets/Input'
import userAuth from '../../appwrite/userconfig'

function Login() {
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();
  const handleLogin = async(user) =>{
    const email = user.email;
    const password = user.password;
    try {
      const userInfo = await userAuth.loginAccount({email,password})
      if (userInfo) console.log(userInfo)
    } catch (error) {
      alert("login error:"+error)
    }
  }
  const navSignup = ()=> {
    navigate('/signup')
  }
  return (
    <div className='flex flex-wrap p-0'>
      <div className= 'w-full md:w-1/2  h-screen items-center justify-center'>
        <div className='w-4/5 flex flex-col items-center justify-center px-7 py-12 mx-auto'>
          <a className='w-full mt-10'>
            <img src={logo} alt="" className='w-1/4'/>
          </a>
          <div className='text-left w-full'>
            <h2 className='text-xl mt-5 font-bold leading-tight tracking-tight text-gray-900'>Log in to your Account</h2>
            <p className='mt-3'>Welcome back!</p>
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
          <div className='w-full'>
            <Input 
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email")}
            />
            <Input 
              label="Password:"
              placeholder="Password"
              type="password"
              {...register("password")}
            />
          </div>
          </form>
          <div className='w-full'>
          <form onSubmit={handleSubmit(handleLogin)}>
            <button type="submit" className='w-full mt-5 h-10 m-1 bg-TBlue text-white'>login</button>
            <p className='mt-3'>New user?</p>
            <button onClick={navSignup} className='w-full mt-3 h-10 m-1 bg-TBlue text-white'>signup</button>
          </form>
          </div>
        </div>
      </div>
      <div className='bg-TBlue w-1/2 h-screen pt-20 pl-10 hidden md:block'>
        <img src={loginImg} alt="" className='w-11/12 '/>
        <p className='text-xl mt-10 text-white'>Manage your tasks in collaborative enviourvemt</p>
      </div>
    </div>
  )
}

export default Login