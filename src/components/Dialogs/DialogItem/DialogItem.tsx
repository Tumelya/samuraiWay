import s from "./../Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialogs}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    )
}
