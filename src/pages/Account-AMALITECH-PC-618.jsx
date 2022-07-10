import React from 'react'
import SavedMovies from '../components/SavedMovies'
import bg2 from '../assets/bg7.jpg'


function Account() {
  return (
    <>
      <div className='w-full text-white'>
        <img className=' w-full h-[400px] object-cover
      ' src={bg2} alt='bgimage' />
        <div className='bg-black/70 fixed top-0 left-0 h-[550px] w-full'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Movies</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  )
}

export default Account