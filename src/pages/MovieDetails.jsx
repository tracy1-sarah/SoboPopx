import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from '../Request';



function MovieDetails() {
  const [movdets, setMoviedet] = useState()
  useEffect(() => {
    fetchMovie()
  },[])

  const fetchMovie = () => {

    axios.get(requests.requestHorror).then((response) => {
      console.log(response)

    })
  }

    return (
      <div className='grid grid-cols-2 gap-2 px-24 pt-24 text-white'>
        <div>hi</div>

        <div>hi</div>

      </div>
    )
  }

  export default MovieDetails