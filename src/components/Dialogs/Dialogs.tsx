import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../redux/state";


type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogsData.map(el => <DialogItem ava={el.ava} name={el.name} id={el.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messagesData.map(el => <Message message={el.messages} time={el.time}/>)}
            </div>
        </div>
    )
}
