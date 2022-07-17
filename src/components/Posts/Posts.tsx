import React from 'react';
import s from './Posts.module.css';
import {Post} from "./Post/Post";

export const Posts = () => {

    let postsData = [
        {id: 1, message: "Hi!", likesCount: 33},
        {id: 2, message: "How are you?", likesCount: 57},
        {id: 3, message: "Hi!", likesCount: 6},
        {id: 4, message: "Hi!", likesCount: 28}
    ]
    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div><textarea name="" id="">New Post</textarea></div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
}