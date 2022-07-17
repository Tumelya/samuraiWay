import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Friends} from "../Friends/Friends";
import {FriendsOnline} from "./FriendsOnline";

export const Navbar = (props: any/*FriendsType*/) => {
    return (
        <nav className={s.navBar}>
            <div><NavLink activeClassName={s.activeLink} to="/profile">Profile</NavLink></div>
            <div><NavLink activeClassName={s.activeLink} to="/dialogs">Messages</NavLink></div>
            <div><NavLink activeClassName={s.activeLink} to="/news">News</NavLink></div>
            <div><NavLink activeClassName={s.activeLink} to="/music">Music</NavLink></div>
            <div><NavLink activeClassName={s.activeLink} to="/settings">Settings</NavLink></div>

            <div className={s.friends}>
                <div><NavLink activeClassName={s.activeLink} to="/friends">Friends</NavLink></div>
                {/*<Friends friends={props.friends}/>*/}
                <FriendsOnline friends={props.friends}/>
            </div>
        </nav>
    )
}