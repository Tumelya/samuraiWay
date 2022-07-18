import React from "react";
import s from "./Button.module.css";

type ButtonPropsType = {
    title: string
    onClick: ()=>void
}
export const Button: React.FC<ButtonPropsType> = (props) => {

    return (
        <button onClick={props.onClick} className={s.butt}>{props.title}</button>
    );
}