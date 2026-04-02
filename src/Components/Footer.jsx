import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#1f2951] text-gray-300 px-6 md:px-12 py-10 mt-10 '>
      
      <h1 className='text-center text-white text-3xl font-bold mb-8'>
        Trailerly
      </h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm'>
        <div>
          <h2 className='text-white font-semibold text-lg mb-2'>About</h2>
          <p>
            Trailerly is a modern movie trailer app to explore trending,
            upcoming, and popular films in a cinematic experience.
          </p>
        </div>

        <div>
          <h2 className='text-white font-semibold text-lg mb-2'>Made For</h2>
          <p>
            Built as a personal project to improve frontend skills and
            understand real-world app development.
          </p>
        </div>

        <div>
          <h2 className='text-white font-semibold text-lg mb-2'>Tech Stack</h2>
          <ul className='space-y-1'>
            <li>React + Vite</li>
            <li>Tailwind CSS</li>
            <li>React Router</li>
            <li>TMDB API</li>
          </ul>
        </div>

        <div>
          <h2 className='text-white font-semibold text-lg mb-2'>Purpose</h2>
          <p>
            To deliver a smooth UI for discovering trailers, searching movies,
            and viewing details like a real streaming platform.
          </p>
        </div>
      </div>

      <div className='border-t border-gray-700 my-8'></div>

      <div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2'>
        <p>© 2026 Trailerly. All rights reserved.</p>
        <p>
          Designed by <span className='text-white font-semibold'>Ganesh Ralla</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer