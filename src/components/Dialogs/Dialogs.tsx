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
                Dialogs here:
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].messages}/>
                <Message message={messagesData[1].messages}/>
            </div>
        </div>
    )
}
