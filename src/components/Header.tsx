import React from 'react';
import h from './Header.module.css'

export const Header = () => {
    return (
        <header className={h.headBar}>
            <img className={h.logo}
                 src="https://cdn-icons.flaticon.com/png/512/3864/premium/3864096.png?token=exp=1657190181~hmac=ae3e2200cdf19c95a73a0dc25055fc8b"
                /*src="https://cdn-icons.flaticon.com/png/512/3750/premium/3750987.png?token=exp=1657206705~hmac=5e20cd7e1a9d62fd7c417eb12cf630cd"*/
                 alt="camel icon" title="camel icon"/>
        </header>
    )
}