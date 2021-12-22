import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <div className="header_logo">Movie App</div>
            </Link>

            <div className="header_user-image">
                <img src="/images/user.png" alt="user" />
            </div>
        </div>
    )
}

export default Header
