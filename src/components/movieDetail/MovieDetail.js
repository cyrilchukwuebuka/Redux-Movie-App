import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedMovieOrShow, fetchAsyncMovieOrShowDetail, getSelectedMovieorShow } from '../../features/movies/movieSlice';
import './MovieDetail.scss'

function MovieDetail() {
    const { imbdID } = useParams();
    const dispatch = useDispatch()
    const data = useSelector(getSelectedMovieorShow);

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imbdID));
        return () => {
            dispatch(removeSelectedMovieOrShow())
        }
    }, [dispatch, imbdID])

    return (
        <div className='movieDetail__movie-section'>
            <>
                {Object.keys(data).length === 0 ?
                    (<div>...Loading</div>)
                    :
                    (<>
                        <div className="movieDetail__section-left">
                            <div className="movieDetail__movie-title">{data.Title}</div>
                            <div className="movieDetail__movie-rating">
                                <span>
                                    IMDB Rating <i className='fa fa-star'></i> : {data.imdbRating}
                                </span>
                                <span>
                                    IMDB Votes <i className='fa fa-thumbs-up'></i> : {data.imdbVotes}
                                </span>
                                <span>
                                    Runtime <i className='fa fa-film'></i> : {data.Runtime}
                                </span>
                                <span>
                                    Year <i className='fa fa-calendar'></i> : {data.Year}
                                </span>
                            </div>
                            <div className="movieDetail__movie-plot">{data.Plot}</div>
                            <div className="movieDetail__movie-info">
                                <div>
                                    <span>Director</span>
                                    <span>{data.Director}</span>
                                </div>
                                <div>
                                    <span>Stars</span>
                                    <span>{data.Actors}</span>
                                </div>
                                <div>
                                    <span>Genres</span>
                                    <span>{data.Genre}</span>
                                </div>
                                <div>
                                    <span>Languages</span>
                                    <span>{data.Language}</span>
                                </div>
                                <div>
                                    <span>Awards</span>
                                    <span>{data.Awards}</span>
                                </div>
                            </div>
                        </div>
                        <div className="movieDetail__section-right">
                            <img src={data.Poster} alt={data.Title} />
                        </div>
                    </>)
                }
            </>
        </div>
    )
}

export default MovieDetail
