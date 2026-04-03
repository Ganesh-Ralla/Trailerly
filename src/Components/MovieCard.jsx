import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movies, type }) => {
    const navigate = useNavigate()

    if (type === "now_playing") {
        return (
            <div className=' mt-4 flex items-end gap-24 overflow-x-auto no-scrollbar overflow-y-hidden'>
                {movies?.slice(0,10)?.map((movie, index) => (
                    <div onClick={() => { navigate(`/details/${movie.id}`) }} className='relative flex items-end min-w-37.5 md:min-w-45' key={movie.id}>
                        <p className='text-[200px] md:text-[240px] font-extrabold leading-none opacity-40'>{index + 1}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""
                            className='hover:cursor-pointer absolute bottom-0 left-16 md:left-20 lg:left-22 w-32 md:w-40 rounded-2xl'/>
                    </div>
                ))}
            </div>
        )
    }
    else if (type === 'popular' || type === 'upcoming') {
        return (
            <div className=" flex  items-center gap-4 w-full my-4 overflow-x-auto no-scrollbar scrollbar-hide">
                {
                    movies.map((movie) => {
                        return (
                            <div key={movie.id} onClick={() => { navigate(`/details/${movie.id}`) }} className=' min-w-37.5 md:min-w-45  '>
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""
                                        className='hover:cursor-pointer rounded-3xl h-auto w-full object-cover' />
                                    <p className='mt-2 text-sm text-center line-clamp-1'>{movie.title}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        )
    } else if (type === "recommendations" || type === "search" || type === "favorite") {
        return (
            <div className=" mt-4 grid grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-6 gap-4">
                {
                    movies.map((movie) => {
                        return (
                            <div key={movie.id} onClick={() => { navigate(`/details/${movie.id}`) }} className=' min-w-37.5 md:min-w-45  '>
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""
                                        className='hover:cursor-pointer rounded-3xl h-auto w-full object-cover' />
                                    <p className='mt-2 text-sm text-center line-clamp-1'>{movie.title}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>

        </>
    )
}

export default MovieCard