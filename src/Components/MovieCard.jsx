import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movies,searchTaken }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className={searchTaken ? "grid grid-cols-2 md:grid-cols-4 md:gap-6 lg:grid-cols-5 gap-4" : " flex  items-center gap-4 w-full my-4 overflow-x-auto scrollbar-hide"}>
                {
                    movies.map((movie) => {
                        return (
                            <div key={movie.id} onClick={()=>{navigate(`/details/${movie.id}`)}} className=' min-w-37.5 md:min-w-45  '>
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""
                                        className=' rounded-3xl h-auto w-full object-cover' />
                                    <p className='mt-2 text-sm text-center line-clamp-1'>{movie.title}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MovieCard