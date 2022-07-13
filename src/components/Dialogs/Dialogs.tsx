import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                Dialogs here:
                <DialogItem name="Maksim" id={1}/>
                <DialogItem name="Maria" id={2}/>
                <DialogItem name="Marta" id={3}/>
                <DialogItem name="Alex" id={4}/>
            </div>
            <div className={s.messages}>
                <Message message="hi"/>
                <Message message="what's up"/>
                <Message message="yo"/>
            </div>
        </div>
    )
}
