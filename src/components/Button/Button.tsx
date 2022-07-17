import React from "react";
import s from "./Button.module.css";

type ButtonPropsType = {
    title: string
}
export const Button: React.FC<ButtonPropsType> = (props) => {

    return (
        <button className={s.butt}>{props.title}</button>
    );
}