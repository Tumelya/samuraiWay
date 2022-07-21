import React from 'react';
import s from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsDataType} from "../../redux/state";

type ProfilePropsType = {
    postsData: Array<PostsDataType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main className={s.content}>
            <ProfileInfo/>
            <Posts postsData={props.postsData}
                   dispatch={props.dispatch}
                   newPostText={props.newPostText}/>
        </main>
    )
}