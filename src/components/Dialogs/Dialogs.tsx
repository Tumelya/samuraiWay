import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsTypes,
    addMessageActionCreator,
    DialogsDataType,
    MessagesDataType,
    updateNewMessageBodyActionCreator
} from "../../redux/state";
import {Button} from "../Button/Button";


type DialogsPropsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const onSendMessageClick = () => {
        props.dispatch(addMessageActionCreator());
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.dispatch(updateNewMessageBodyActionCreator(body));
    }
    const onCleanMessageClick = () => {
        props.dispatch(updateNewMessageBodyActionCreator(""));
    }
    const cols = 47;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.headerLine}>Dialogs</div>
                {props.dialogsData.map(el => <DialogItem ava={el.ava} name={el.name} id={el.id}/>)}
            </div>
            <div>
                <div className={s.messages}>
                    {props.messagesData.map(el => <Message message={el.messages} time={el.time}/>)}
                </div>
                <div className={s.texButt}>
                    <div className={s.textarea}>
                        <textarea value={props.newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder="Message..."
                                  cols={cols}>
                        </textarea>
                    </div>
                    <div className={s.button}><Button onClick={onSendMessageClick} title="Send"/></div>
                    <div className={s.button}><Button onClick={onCleanMessageClick} title="Clean"/></div>
                </div>
            </div>
        </div>
    )
}
