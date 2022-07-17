import React from 'react';
import s from './Posts.module.css';
import {Post} from "./Post";
import {PostsDataType} from "../../../App";
import {Button} from "../../Button/Button";

type PostsPropsType = {
    postsData: Array<PostsDataType>
}

export const Posts = (props: PostsPropsType) => {

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div><textarea name="" id="">New Post</textarea></div>
                <Button title="Add post"/>
            </div>
            <div className={s.posts}>
                {props.postsData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
}