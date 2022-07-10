import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import bg2 from '../assets/bg7.jpg'

function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { user, signUp } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await signUp(email, password)
      navigate('/')
    } catch (error) {
      setError(error.message)
    }

  }

  return (
    <div className='w-full h-screen'>
      <img className='
      hidden sm:block absolute w-full h-full object-cover
      ' src={bg2} alt='bgimage' />
      <div className='bg-black/80 fixed top-0 left-0 h-screen w-full'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            {error ? <p className='p-3 bg-red-500 my-2'>{error}</p> : null}
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-zinc-800 rounded' type="email" placeholder='Email' autoComplete='email' />
              <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-zinc-800 rounded' type="password" placeholder='Password' autoComplete='current-password' />
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
              <div className='flex justify-between items-center text-sm text-gray-400'>
                <p><input className='mr-2' type="checkbox" />Remember me</p>
                <p>Need help?</p>
              </div>
              <p className='pt-10'><span className='text-zinc-400'>Already have an account?</span>{' '}
                <Link className='cursor-pointer' to="/login">Sign in now.</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup