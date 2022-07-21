import React from 'react';
import s from './Profile.module.css';
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../redux/state";

type ProfilePropsType = {
    postsData: Array<PostsDataType>
    newPostText: string
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string)=>void

}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main className={s.content}>
            <ProfileInfo/>
            <Posts postsData={props.postsData} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText}/>
        </main>
    )
}