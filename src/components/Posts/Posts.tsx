import React from 'react';
import s from './Posts.module.css';
import {Post} from "./Post/Post";

export const Posts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea name="" id="">New Post</textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi!" likesCount={33}/>
                <Post message="How are you?" likesCount={57}/>
            </div>
        </div>
    )
}