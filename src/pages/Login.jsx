import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { user, logIn } = UserAuth()
  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await logIn(email, password)
      navigate('/')

    } catch (error) {
      setError(error.message)
    }

  }
  return (
    <div className='w-full h-screen'>
      <img className='
      hidden sm:block absolute w-full h-full object-cover
      ' src='https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/adf9c0ba-1b86-4e39-ab55-a099e5f99307/GH-en-20220516-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bgimage' />
      <div className='bg-black/60 fixed top-0 left-0 h-screen w-full'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-extrabold'>Sign In</h1>
            {error ? <p className='p-3 bg-red-500 my-2'>{error}</p> : null}
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-zinc-800 rounded' type="email" placeholder='Email or phone number' autoComplete='email' />
              <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-zinc-800 rounded' type="password" placeholder='Password' autoComplete='current-password' />
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
              <div className='flex justify-between items-center text-sm text-gray-400'>
                <p><input className='mr-2' type="checkbox"/>Remember me</p>
                <p>Need help?</p>
              </div>
              <p className='pt-16'><span className='text-zinc-400'>New to Netflix?</span>{' '}
                <Link className='cursor-pointer' to="/signup">Sign up now.</Link></p>
              <p className='text-zinc-400 text-sm pt-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<Link className='cursor-pointer text-blue-600 font-bold' to="/"> Learn more</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login