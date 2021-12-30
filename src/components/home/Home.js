import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import MovieListing from '../movieListing/MovieListing'

function Home() {
    const dispatch = useDispatch();
    const searchText = 'Harry'

    useEffect(() => {
        dispatch(fetchAsyncMovies(searchText))
        dispatch(fetchAsyncShows(searchText))
    }, [dispatch])

    return (
        <div className='home'>
            <div className="home_banner-img"></div>
            <MovieListing />
        </div>
    )
}

export default Home
