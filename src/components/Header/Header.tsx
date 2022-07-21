import React from 'react';
import s from './Header.module.css'
import theme from '../../assets/images/moon.png'
export const Header = () => {
    return (
        <header className={s.headBar}>
            <img className={s.logo}
                 src="https://cdn-icons-png.flaticon.com/512/4379/4379396.png"
                 alt="icon" title="icon"/>
            <img className={s.theme}

                 src={theme}
                 alt="theme"/>
        </header>
    )
}