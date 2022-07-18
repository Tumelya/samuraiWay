import React from 'react';
import s from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "../../redux/state";

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main className={s.content}>
            <ProfileInfo/>
            <Posts postsData={props.postsData} addPost={props.addPost}/>
        </main>
    )
}