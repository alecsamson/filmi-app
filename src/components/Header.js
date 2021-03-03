import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../icons/logo.svg';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/"><img src={Logo} alt='Logo' /></Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="/" className="btn-2">Watchlist</Link>
                        </li>

                        <li>
                            <Link to="/watched" className="btn-2">Watched</Link>
                        </li>

                        <li>
                            <Link to="/add" className="btn-3">Search</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
