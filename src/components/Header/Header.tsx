import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.headBar}>
            <img className={s.logo}
                 src="https://cdn-icons-png.flaticon.com/512/4379/4379396.png"
                 //src="https://cdn-icons.flaticon.com/png/512/3864/premium/3864096.png?token=exp=1657190181~hmac=ae3e2200cdf19c95a73a0dc25055fc8b"
                 //src="https://cdn-icons.flaticon.com/png/512/3750/premium/3750987.png?token=exp=1657206705~hmac=5e20cd7e1a9d62fd7c417eb12cf630cd"
                 alt="icon" title="icon"/>
        </header>
    )
}