import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Maksim"}, {id: 2, name: "Maria"},
        {id: 3, name: "Marta"}, {id: 4, name: "Alex"}
    ]
    let messagesData = [
        {id: 1, messages: "hi"}, {id: 2, messages: "what's up"},
        {id: 3, messages: "yo"}, {id: 4, messages: "nice look"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)}
            </div>
            <div className={s.messages}>
                {messagesData.map(el => <Message message={el.messages}/>)}
            </div>
        </div>
    )
}
