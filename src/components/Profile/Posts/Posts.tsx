import React, {ChangeEvent} from 'react';
import s from './Posts.module.css';
import {Post} from "./Post";
import {Button} from "../../Button/Button";
import {PostsDataType} from "../../../redux/state"

type ProfilePropsType = {
    postsData: Array<PostsDataType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string)=>void

}

export const Posts: React.FC<ProfilePropsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current){
            props.addPost();
            props.updateNewPostText("");
        }
    }
    let textRemove = () => {
        if (newPostElement.current){
            props.updateNewPostText("");
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }

    return (
        <div>
            <h4>My Posts</h4>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder="New Post"></textarea></div>
                <Button onClick={addPost} title="Add post"/>
                <Button onClick={textRemove} title="Clean"/>
            </div>
            <div className={s.posts}>
                {props.postsData.map(el => <Post message={el.message} likesCount={el.likesCount} key = {el._id}/>)}
            </div>
        </div>
    )
}