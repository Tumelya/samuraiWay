import React from 'react';
import p from './Profile.module.css';

export const Profile = () => {
    return (
        <main className={p.content}>
            <img className={p.cover}
                src="https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""/>
            <div>
                <img className={p.avatar} src="https://cdn-icons-png.flaticon.com/512/1016/1016733.png" alt=""/>
                Description here
            </div>
            <div>
                Posts
                <div>New post</div>
            </div>
        </main>
    )
}