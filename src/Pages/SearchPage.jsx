import React from 'react'
import useMovies from '../Hooks/useMovies'
import MovieCard from '../Components/MovieCard';

const SearchPage = ({searchInput,searchTaken}) => {
    const searchMovies = useMovies('search',searchInput)
    console.log(searchMovies.movies);
    
  return (
    <main className=' mt-14 p-4 md:px-8 lg:px-12 text-white  '>
        <MovieCard searchTaken={searchTaken} movies={searchMovies.movies} />
    </main>
  )
}

export default SearchPage