import React from 'react';
import s from './Settings.module.css';
import {Button} from "../Button/Button";

export const Settings = () => {
    return (
        <div>
            <div className={s.headerLine}>
                Settings
            </div>
            <div>
                <div className={s.texButt}>
                    <div className={s.textarea}><textarea name="" id="" placeholder="..."></textarea></div>
                    <div className={s.button}><Button title="Search"/></div>
                </div>
            </div>
        </div>
    )
}