/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { Heart, Play, Star, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'
import YouTube from 'react-youtube'
import useMovies from '../Hooks/useMovies'
import MovieCard from '../Components/MovieCard'

const Details = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [video, setVideo] = useState(null)
    const [movieDetails, setMovieDetails] = useState(null)
    const [showTrailer, setShowTrailer] = useState(false)

    const recommendations = useMovies(`${id}/recommendations`)




    const fetchVideo = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c14b4be626e335e8a964c94c1f37f647`)
        const data = response.data
        const trailer = data.results.find(
            (video) =>
                video.site === "YouTube" &&
                video.type === "Trailer"
        )
        setVideo(trailer?.key)
        console.log(trailer);

    }

    const handleNoTrailer = () => {
        if (!video) {
            toast.error('Oops, No Trailer found', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                transition: Bounce,
                className: ' mt-18 bg-blue-400 rounded-xl text-center'
            });
        }
    }


    const fetchMovies = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c14b4be626e335e8a964c94c1f37f647`)
        const data = response.data
        setMovie(data)
        console.log(data);

    }

    const fetchMovieDetails = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c14b4be626e335e8a964c94c1f37f647`)
        const data = response.data
        setMovieDetails(data)
        console.log("details", data);


    }

    useEffect(() => {
        fetchMovies(),
            fetchVideo(),
            fetchMovieDetails()
    }, [id])

    const [readmore, setReadmore] = useState(false)
    const [read, setRead] = useState('read more')
    const handleRead = () => {
        setReadmore(!readmore)
        setRead(readmore ? 'read more' : 'read less')

    }

    const [isFav, setIsFav] = useState(false)
    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favorite")) || []
        setIsFav(favs.includes(Number(id)))
    }, [id])

    const toggleFavourite = (id) => {
        let favs = JSON.parse(localStorage.getItem("favorite")) || []

        if (favs.includes(id)) {
            favs = favs.filter(fav => fav !== id)
            toast.info("Removed from Favourites")
            setIsFav(false)
        } else {
            favs.push(id)
            toast.success("Added to Favourites")
            setIsFav(true)
        }

        localStorage.setItem("favorite", JSON.stringify(favs))
    }

    

    if (!movie) return <p>Loading...</p>

    return (
        <main className=' mt-14 md:mt-20 lg:mt-0 text-white '>
            <div className=' relative'>
                {
                    showTrailer ? <div>
                        <YouTube className=' relative aspect-video' videoId={video}
                            opts={{ width: '100%', height: '100%', playerVars: { autoplay: 1, mute: 0 } }} />
                        <button onClick={() => { setShowTrailer(false) }} className=' absolute top-2 md:top-20 right-2 bg-black/70 text-white px-3 py-1 rounded-full hover:cursor-pointer'><X /> </button>
                    </div> : <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt=""
                        className=' w-full aspect-video ' />
                }
                <div className='p-4 md:hidden'>
                    <div className=' flex items-center justify-between'>
                        <p className='font-semibold text-lg'>{movie.title}</p>
                        <Heart
                            onClick={() => toggleFavourite(movie.id)}
                            className={`cursor-pointer transition ${isFav ? "fill-red-500 text-red-500" : "text-white"
                                }`}
                        />
                    </div>
                    <p className='flex items-center gap-2 my-2 text-sm'><Star size={20} />{movie.popularity}</p>
                    <p className='text-sm'>Release date : {movie.release_date}</p>
                    <button
                        onClick={() => video ? setShowTrailer(true) : handleNoTrailer()}
                        className='my-2 flex items-center gap-2 p-2 bg-blue-600 text-white rounded-2xl w-full justify-center'>
                        <Play size={20} /> Play Trailer
                    </button>

                    <p className={readmore ? '' : 'line-clamp-3'}>{movie.overview}</p>
                    <p className='text-blue-600' onClick={handleRead}>{read}</p>
                </div>
                {
                    !showTrailer &&
                    <div className='hidden md:block p-4 md:absolute bottom-2 md:text-white md:px-8 lg:px-12'>
                        <p className=' font-semibold text-lg md:text-2xl lg:text-4xl lg:font-bold'>{movie.title}</p>
                        <p className=' flex items-center gap-2 my-2 text-sm md:text-lg'><Star size={20} />{movie.popularity}</p>
                        <p className=' text-sm md:text-lg'>Release date : {movie.release_date}</p>
                        <div className='flex items-center gap-4'>
                            <button onClick={() => video ? setShowTrailer(true) : handleNoTrailer()}
                                className='hover:cursor-pointer my-2 flex items-center gap-2 p-2 bg-blue-600 text-white rounded-2xl w-full md:w-40 justify-center'>
                                <Play size={20} /> Play Trailer
                            </button>

                            <button onClick={() => toggleFavourite(movie.id)}
                                className='hover:cursor-pointer my-2 flex items-center gap-2 p-2 bg-blue-600 text-white rounded-2xl w-full md:w-40 justify-center'>
                                <Heart className={`${isFav ? "fill-white" : ""}`} />
                                {isFav ? "Remove" : "Add"}
                            </button>
                        </div>
                        <p className={readmore ? '' : 'line-clamp-3 md:line-clamp-1 '}>{movie.overview}</p>
                        <p className=' text-blue-600 hover:cursor-pointer' onClick={handleRead}>{read}</p>
                    </div>
                }
            </div>

            <div className=' p-4 md:px-8 lg:p-12'>
                <p className=' text-2xl font-bold'>Overview</p>
                <p className=' text-lg font-bold'>Cast</p>
                <div className='flex overflow-x-auto no-scrollbar items-center gap-8 my-4'>
                    {
                        movieDetails?.cast?.slice(0, 10)?.map((cast) => {
                            return (
                                <div key={cast?.id} className="text-center flex flex-col  items-center">

                                    <div className='h-20 w-20 rounded-full overflow-hidden'>
                                        <img src={cast.profile_path ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : "https://via.placeholder.com/100x100?text=No+Image"}
                                            alt={cast?.name} className='w-full h-full object-cover' />
                                    </div>

                                    <p className='text-sm mt-1 whitespace-nowrap'>{cast?.name}</p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className=' my-4 '>
                    <p className=' font-bold text-lg'>Recommended</p>
                    <MovieCard movies={recommendations.movies} type="recommendations" />
                </div>
            </div>
        </main>
    )
}

export default Details