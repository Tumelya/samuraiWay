import React, {ChangeEvent} from 'react';
import s from './Posts.module.css';
import {Post} from "./Post";
import {Button} from "../../Button/Button";
import {ActionsTypes, PostsDataType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

type PostsPropsType = {
    postsData: Array<PostsDataType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const Posts: React.FC<PostsPropsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator());
            props.dispatch(updateNewPostTextActionCreator(""));
        }
    }
    let textRemove = () => {
        if (newPostElement.current) {
            props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: ""});
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value));
    }

    return (
        <div>
            <h4>My Posts</h4>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}
                               placeholder="New Post"></textarea></div>
                <Button onClick={addPost} title="Add post"/>
                <Button onClick={textRemove} title="Clean"/>
            </div>
            <div className={s.posts}>
                {props.postsData.map(el => <Post message={el.message} likesCount={el.likesCount} key={el._id}/>)}
            </div>
        </div>
    )
}