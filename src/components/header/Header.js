import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import './Header.scss'

function Header() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
        if (search === '') {
            alert('Please enter search value')
            return;
        }
        dispatch(fetchAsyncMovies(search))
        dispatch(fetchAsyncShows(search))
        setSearch('')
    }

    return (
        <div className='header'>
            <Link to='/'>
                <div className="header__logo">
                    🎥 Movie App
                </div>
            </Link>
            <div className="header__search-bar">
                <form action="" onSubmit={submitHandler}>
                    <input type="text" value={search} placeholder='Search Movies or Shows' onChange={(e) => setSearch(e.target.value)} />
                    <button type='submit'><i className='fa fa-search'></i></button>
                </form>
            </div>
            <div className="header__user-image">
                <img src="/images/user.png" alt="user" />
            </div>
        </div>
    )
}

export default Header
