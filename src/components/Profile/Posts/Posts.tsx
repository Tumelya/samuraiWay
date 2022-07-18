import React from 'react';
import s from './Posts.module.css';
import {Post} from "./Post";

import {Button} from "../../Button/Button";
import {PostsDataType} from "../../../redux/state";

type PostsPropsType = {
    postsData: Array<PostsDataType>
}

export const Posts: React.FC<PostsPropsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        let text = newPostElement.current?.value;
        alert(text);
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div><textarea ref={newPostElement} name="" id="" placeholder="New Post"></textarea></div>
                <Button onClick={addPost} title="Add post"/>
                <Button onClick={addPost} title="Remove"/>
            </div>
            <div className={s.posts}>
                {props.postsData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)}
            </div>
        </div>
    )
}