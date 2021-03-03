import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {MovieCard} from './MovieCard';

export const Watched = () => {
    const {watched} = useContext(GlobalContext);
    return (
        <div className="movie-page">
        <div className="container">
            <div className="header">
                <h1 className="heading">
                    My Watched Movies
                </h1>
                <span className="count-pill">
                        {watched.length} 
                        
                    </span>

            </div>
    
            {watched.length > 0 ? (
                  <div className="movie-grid">
                  {watched.map(movie => (
                      <MovieCard movie={movie} type="watched" />
                      ))}
              </div>
                )
                : 
                (<div className="no-movies">
                    <h2 >You haven't added any <strong>Watched</strong> movies yet. 😞</h2>
                </div>
                )
            }
          
        </div>
    </div>
    )
}
