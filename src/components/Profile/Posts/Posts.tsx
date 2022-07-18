import React from 'react';
import s from './Posts.module.css';
import {Post} from "./Post";
import {Button} from "../../Button/Button";
import {ProfilePropsType} from "../../../redux/state";

export const Posts: React.FC<ProfilePropsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        if (newPostElement.current){
            props.addPost(newPostElement.current.value);
        }
    }

    return (
        <div>
            <h4>My Posts</h4>
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