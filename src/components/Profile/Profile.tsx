import React from 'react';
import s from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../redux/state";

export type ProfilePropsType = {
    postsData: Array<PostsDataType>
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main className={s.content}>
            <ProfileInfo/>
            <Posts postsData={props.postsData}/>
        </main>
    )
}