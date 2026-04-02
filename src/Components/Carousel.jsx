import React from 'react'
import 'swiper/css';
import useMovies from '../Hooks/useMovies'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const Carousel = () => {

  const carouselMovies = useMovies('upcoming')
  console.log("carousel", carouselMovies.movies)
  return (
    <section className="min-h-125 md:min-h-175 ">
      <Swiper
        key={carouselMovies.movies?.length}
        modules={[Autoplay]}
        loop={true}
        slidesPerView={1}
        speed={800}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}>
        {carouselMovies.movies?.map((movie) => (
          <SwiperSlide key={movie.id} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-125 block md:hidden object-cover"/>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full hidden md:block md:h-200 object-cover"/>

            <div className="bg-linear-to-t from-black to-transparent absolute bottom-0 w-full p-4 text-white">
              <p className="text-3xl font-extrabold">{movie.title}</p>
              <p className="text-sm line-clamp-3">{movie.overview}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Carousel