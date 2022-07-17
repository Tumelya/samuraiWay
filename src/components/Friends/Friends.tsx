import React from "react";
import s from "./Friends.module.css";
import {Friend} from "./Friend";

export type FriendType = {
    id?: number
    ava: string
    name: string
}
type FriendsPropsType = {
    friends: Array<FriendType>
}
export const Friends = (props: FriendsPropsType) => {

    return (
        <div className={s.friends}>
            {/*Friends*/}
            {props.friends.map(el => <Friend ava={el.ava} name={el.name}/>)}
        </div>
    )
}