import React from "react";
import s from "./../Friends/Friends.module.css";

export type FriendType = {
    id?: number
    ava: string
    name?: string
}
type FriendsPropsType = {
    friends: Array<FriendType>
}
export const FriendsOnline: React.FC<FriendsPropsType> = (props) => {

    return (
        <div className={s.sideFriends}>
            {props.friends.map(el => <img className={s.ava} src={el.ava}></img>)}
        </div>
    )
}