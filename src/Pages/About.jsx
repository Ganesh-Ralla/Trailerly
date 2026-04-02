import { ArrowRight } from 'lucide-react'
import React from 'react'

const About = () => {
    return (
        <main className="mt-14 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-12">

            <section className="text-center space-y-4 py-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Trailerly
                </h1>
                <p className="text-gray-400 text-lg">
                    Discover Movies. Explore Stories. Experience Cinema.
                </p>
            </section>

            <section className="bg-[#1f2951] p-6 md:p-8 rounded-2xl shadow-md space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    About Trailerly
                </h2>

                <p className="text-gray-400 leading-relaxed">
                    Trailerly is a movie trailer browsing application built to explore and practice modern frontend development
                    using React. It allows users to discover now-playing and upcoming movies, view trailers, and explore essential
                    movie details in a clean and intuitive interface.

                    The project focuses on building a smooth user experience while working with real-world APIs, managing state, and 
                    designing responsive UI components.
                </p>

                <p className="text-gray-400 leading-relaxed">
                    The app focuses on clarity and performance, presenting only essential movie information like posters, ratings, and 
                    trailers in a structured and visually engaging way.
                </p>
            </section>

        
            <section className="bg-[#1f2951] p-6 md:p-8 rounded-2xl shadow-md space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Tools & Technologies
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
                    <span className="bg-[#252b6ce1] p-3 rounded-lg text-center">React</span>
                    <span className="bg-[#252b6ce1] p-3 rounded-lg text-center">Vite</span>
                    <span className="bg-[#252b6ce1] p-3 rounded-lg text-center">Tailwind</span>
                    <span className="bg-[#252b6ce1] p-3 rounded-lg text-center">TMDB API</span>
                    <span className="bg-[#252b6ce1] p-3 rounded-lg text-center">Axios</span>
                    <span className="bg-[#252b6ce1] p-3 rounded-lg text-center">LocalStorage</span>
                </div>
            </section>


            <section className="bg-[#1f2951] p-6 md:p-8 rounded-2xl shadow-md space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Features
                </h2>

                <div className="grid md:grid-cols-2 gap-4 text-gray-400">
                    <div className="bg-[#252b6ce1] p-4 rounded-xl hover:scale-105 transition">
                        Discover now playing & upcoming movies
                    </div>
                    <div className="bg-[#252b6ce1] p-4 rounded-xl hover:scale-105 transition">
                        Search movies instantly
                    </div>
                    <div className="bg-[#252b6ce1] p-4 rounded-xl hover:scale-105 transition">
                        Detailed movie information & trailers
                    </div>
                    <div className="bg-[#252b6ce1] p-4 rounded-xl hover:scale-105 transition">
                        Save favorites using local storage
                    </div>
                </div>
            </section>

            
            <section className="bg-[#1f2951] p-6 md:p-8 rounded-2xl shadow-md space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    How It Works
                </h2>

                <ul className="space-y-2 text-gray-400 leading-relaxed">
                    <li className=' flex items-center gap-2'><ArrowRight/> Browse trending and latest movies</li>
                    <li className=' flex items-center gap-2'><ArrowRight/> Search for your favorite titles</li>
                    <li className=' flex items-center gap-2'><ArrowRight/> View detailed movie information</li>
                    <li className=' flex items-center gap-2'><ArrowRight/> Add movies to your favorites list</li>
                </ul>
            </section>

            
            <section className="bg-[#1f2951] p-6 md:p-8 rounded-2xl shadow-md space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Design Philosophy
                </h2>

                <ul className="space-y-2 text-gray-400">
                    <li className=' flex items-center gap-2'><ArrowRight/> Clarity over complexity</li>
                    <li className=' flex items-center gap-2'><ArrowRight/> Minimal and cinematic UI</li>
                    <li className=' flex items-center gap-2'><ArrowRight/> Smooth and responsive experience</li>
                    <li className=' flex items-center gap-2'><ArrowRight/> Focus on user experience</li>
                </ul>
            </section>

            <section className="bg-linear-to-r from-[#29335a] to-[#16214f] p-8 rounded-2xl text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    About the Creator
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto">
                    Built by <span className="text-white font-semibold">Ganesh Ralla</span>, a passionate frontend developer focused on 
                    building clean, user-friendly web applications. This project reflects a strong interest in modern UI design and 
                    real-world application development.
                </p>
            </section>

            <section className="text-center text-gray-500 text-sm pb-10">
                Trailerly is more than just a project — it's a step towards building meaningful digital experiences.
            </section>

        </main>
    )
}

export default About