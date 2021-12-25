import React from 'react'
import './MovieCard.scss'

function MovieCard({ data }) {
    return (
        <div className='moviecard__card-item'>
            <div className="movieCard__card-inner">
                <div className="movieCard__card-top">
                    <img src={data.Poster} alt={data.Title} />
                </div>
                <div className="movieCard__card-bottom">
                    <div className="movieCard__card-info">
                        <h4>{data.Title}</h4>
                        <p>{data.Year}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
