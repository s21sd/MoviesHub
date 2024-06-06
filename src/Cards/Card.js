import React from 'react'
import './card.css'
const Card = ({ movie }) => {
    return (
        <div>
            <div className="card-container">
                <div className="card">
                    <div className="img-content">
                        <img src={movie.poster_path} width={400} height={370} alt='poster' />
                    </div>
                    <div className="content">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                display: 'grid',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <p className="heading">{movie.original_title?.length > 20 ? movie.original_title.slice(0, 10) + '...' : movie.original_title} </p>
                                <span style={{
                                    fontSize: 20,
                                    color: 'red'
                                }}>movie</span>
                            </div>
                            <p className="release-date">{movie.release_date}</p>
                        </div>
                        <p>
                            {movie.overview?.length > 100 ? movie.overview.slice(0, 150) + ' ...' : movie.overview}
                        </p>
                        <p style={{
                            textAlign: 'end',
                            color: 'red',
                            fontWeight: 'bold'
                        }}>{movie.genres[0]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
