import React from "react";
import s from "./Post.module.css";

type PostType = {
    message: string
    likesCount: number
}
export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src="https://cdn-icons-png.flaticon.com/512/1016/1016736.png" alt="avatar"/>
            <span className={s.message}>{props.message}</span>
            <div className={s.likes}>
                Likes: {props.likesCount}  Comment
            </div>
        </div>
    )
}
