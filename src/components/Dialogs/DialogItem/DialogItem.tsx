import s from "./../Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    ava: string
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <img className={s.ava} src={props.ava} alt=""/>
            <div className={s.name}><NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink></div>
        </div>
    )
}
