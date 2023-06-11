import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className=' text-center space-x-3 text-cyan-800 py-3 text-xl header-main'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/user'>Users</NavLink>

        </nav>
    );
};

export default Header;