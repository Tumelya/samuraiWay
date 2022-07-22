import React from "react";
import s from "./Message.module.css";

type MessagePropsType = {
    message: string
    time: string
}

export const Message: React.FC<MessagePropsType> = (props) => {

    return (
            <div className={s.common}>
                <div className={s.messageForm}>
                    <div className={s.left}>
                        <p className={s.mess}>{props.message}</p>
                    </div>
                    <div className={s.right}>
                        <p className={s.time}>{props.time}</p>
                    </div>
                </div>
                <div className={s.triangle}></div>
            </div>
    )
}