import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";
import List from "../icons/list.svg";
import Eye from "../icons/eye.svg";
import Trash from "../icons/trash.svg";

export const MovieControls = ({ movie, type }) => {
    const {removeMovieFromWatchlist, 
            addMovieToWatched, 
            moveToWatchlist, 
            removeFromWatched } = useContext(GlobalContext);
    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <div className='ctrl-container'>
                <button className='ctrl-btn-green'
                onClick={() => addMovieToWatched(movie)}>
                    <img src={Eye} alt="eye" />
                </button>

                <button className='ctrl-btn-red'
                onClick={() => removeMovieFromWatchlist(movie.id)}
                >
                     <img src={Trash} alt="trash" />
                </button>
                </div>
            )}

            {type === 'watched' && 
            (
                <div className='ctrl-container'>
                <button className="ctrl-btn-green"
                onClick={() => moveToWatchlist(movie)}>
                <img src={List} alt="list" />
                </button>

                <button className="ctrl-btn-red"
                onClick={() => removeFromWatched(movie.id)}>
                 <img src={Trash} alt="trash" />
                </button>
                </div>
            )}
        </div>
    )
}
