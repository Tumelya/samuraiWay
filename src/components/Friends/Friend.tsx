import React from "react";
import s from "./Friends.module.css";
import {FriendType} from "./Friends";
import {NavLink} from "react-router-dom";

export const Friend: React.FC<FriendType> = (props) => {

    return (
        <div className={s.friend}>
            <img className={s.ava} src={props.ava} alt=""/>
            <div className={s.name}>
                <NavLink to={"/"+props.id}>{props.name}</NavLink>
            </div>
        </div>
    )
}