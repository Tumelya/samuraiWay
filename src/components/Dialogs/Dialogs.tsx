import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../redux/state";
import {Button} from "../Button/Button";


type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>();
    let addMessage = () => {
        if (newMessageElement.current) {
            alert(newMessageElement.current?.value);
            newMessageElement.current.value = "";
        }
    }

    let textRemove = () => {
        if (newMessageElement.current) {
            newMessageElement.current.value = "";
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogsData.map(el => <DialogItem ava={el.ava} name={el.name} id={el.id}/>)}
            </div>
            <div>
                <div className={s.messages}>
                    {props.messagesData.map(el => <Message message={el.messages} time={el.time}/>)}
                </div>
                <div className={s.texButt}>
                    <div className={s.textarea}><textarea ref={newMessageElement} name="" id=""
                                                          placeholder="Message"></textarea></div>
                    <div className={s.button}><Button onClick={addMessage} title="Send"/></div>
                    <div className={s.button}><Button onClick={textRemove} title="Clean"/></div>
                </div>
            </div>
        </div>
    )
}
