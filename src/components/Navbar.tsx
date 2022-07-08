import React from 'react';
import n from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={n.navBar}>
            <div><a href="">Profile</a></div>
            <div><a href="">Messages</a></div>
            <div><a href="">News</a></div>
            <div><a href="">Music</a></div>
            <div><a href="">Settings</a></div>
        </nav>
    )
}