import React from 'react'
import SavedMovies from '../components/SavedMovies'

function Account() {
  return (
    <>
      <div className='w-full text-white'>
        <img className=' w-full h-[400px] object-cover
      ' src='https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/adf9c0ba-1b86-4e39-ab55-a099e5f99307/GH-en-20220516-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bgimage' />
        <div className='bg-black/60 fixed top-0 left-0 h-[550px] w-full'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Movies</h1>
        </div>
      </div>
      <SavedMovies/>
    </>
  )
}

export default Account