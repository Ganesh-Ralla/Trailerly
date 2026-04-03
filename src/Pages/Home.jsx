import React from 'react'
import Carousel from '../Components/Carousel'
import MovieCard from '../Components/MovieCard'
import useMovies from '../Hooks/useMovies'

const Home = () => {
    const nowPlaying = useMovies('now_playing')
    const popular = useMovies('popular')
    const upcoming = useMovies('upcoming')
    
    console.log(nowPlaying.movies);
    

  return (
    <main className=' text-white'>
        <section className=''>
            <Carousel/>
        </section>
        <section className=' p-4 md:px-8 lg:px-12'>
            <div className=' py-4'>
                <p className=' text-2xl font-bold'>Now Playing</p>
                <MovieCard  movies={nowPlaying.movies} type="now_playing" />
            </div>
            <div className=' py-4'>
                <p className=' text-2xl font-bold'>Popular</p>
                <MovieCard movies={popular.movies} type="popular" />
            </div>

            <div className=' py-4'>
                <p className=' text-2xl font-bold'>Upcoming</p>
                <MovieCard movies={upcoming.movies} type="upcoming" />
            </div>
        </section>

    </main>
  )
}

export default Home