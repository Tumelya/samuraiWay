import React from 'react';
import s from './Profile.module.css';
import {Posts} from "../Posts/Posts";
import {ProfileInfo} from "./ProfileInfo";

export const Profile = () => {
    return (
        <main className={s.content}>
            <ProfileInfo/>
            <Posts/>
        </main>
    )
}