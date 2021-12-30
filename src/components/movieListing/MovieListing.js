import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows, getLoader } from '../../features/movies/movieSlice'
import './MovieListing.scss'
import MovieCard from '../movieCard/MovieCard'
import Slider from "react-slick"
import { settings } from '../../common/settings'

function MovieListing() {
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    const loader = useSelector(getLoader)
    console.log(movies);

    let renderMovies = movies.Response === 'True' ? (
        movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ))
    ) : (
        <div className='movies-error'><h3>{movies.error?.messsage}</h3></div>
    );

    let renderShows = shows.Response === 'True' ? (
        shows.Search.map((Show, index) => (
            <MovieCard key={index} data={Show} />
        ))
    ) : (
        <div className='movies-error'><h3>{shows.error?.messsage}</h3></div>
    );
    return (
        <div className='movieListing__movie-wrapper'>
            <div className="movieListing__movie-list">
                <h2>Movies</h2>
                <div className="movieListing__border-line"></div>
                <div className="movieListing__movie-container">
                    {loader ?
                        (<div className='movieListing__loading'>...Loading</div>)
                        :
                        (
                            <Slider {...settings}>{renderMovies}</Slider>
                        )
                    }
                </div>
            </div>
            <div className="movieListing__movie-list">
                <h2>Shows</h2>
                <div className="movieListing__border-line"></div>
                <div className="movieListing__movie-container">
                    {loader ?
                        (<div className='movieListing__loading'>...Loading</div>)
                        :
                        (
                            <Slider {...settings}>{renderShows}</Slider>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieListing
