/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../Components/MovieCard'

const Favourites = () => {
  const [movies, setMovies] = useState([])

  const getFavourites = async () => {
    const favs = JSON.parse(localStorage.getItem("favorite")) || []

    // fetch each movie details
    const results = await Promise.all(
      favs.map((id) =>
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c14b4be626e335e8a964c94c1f37f647`)
      )
    )

    const data = results.map(res => res.data)

    setMovies(data)
  }

  useEffect(() => {
    getFavourites()
  }, [])

  return (
    <main className='mt-14 p-4 md:px-8 lg:px-12 text-white'>
      <p className='text-xl font-bold mb-4'>Favourites</p>

      {
        movies.length === 0 ? <p className=' text-center opacity-75 h-[50vh]'>No favourites added</p> : <MovieCard movies={movies} type='favorite' />
      }
    </main>
  )
}

export default Favourites