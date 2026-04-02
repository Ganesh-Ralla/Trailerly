import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useMovies = (endpoint,query) => {
    const baseUrl = 'https://api.themoviedb.org/3/'
    const apiKey = 'c14b4be626e335e8a964c94c1f37f647'

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading,setLoading] = useState(true)

    const getMovies = async () => {
        try {
            let url = ''
            if(endpoint=='search'){
               url = `${baseUrl}${endpoint}/movie?api_key=${apiKey}&query=${query}`
            }else{
                url = `${baseUrl}movie/${endpoint}?api_key=${apiKey}`
            }
            const response = await axios.get(url)
            const data = response.data.results
            setMovies(data)
        }catch(e){
            console.log(e.message);
            setError(e.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(endpoint){
            getMovies()
        }
    },[endpoint,query])


    

    return {movies, loading, error}
}

export default useMovies