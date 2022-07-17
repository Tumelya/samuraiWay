import s from "./Button.module.css";

type ButtonPropsType = {
    title: string
}
export const Button = (props: ButtonPropsType) => {

    return (
        <button className={s.butt}>{props.title}</button>
    );
}