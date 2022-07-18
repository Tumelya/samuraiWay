import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <>
            <img className={s.cover}
                //src="https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                //src="https://img.freepik.com/premium-vector/japan-wave-ocean-illustration-asia-oriental-traditional-hokusai-line-art-design_149225-72.jpg?w=2000"
                 src="https://i.pinimg.com/736x/6c/75/9e/6c759eaf23c72d95a7ebdd54288f829e--japanese-painting-cookie-monster.jpg"
                 alt=""/>
            <div className={s.avaDescBlock}>
                <div>
                    <img className={s.avatar}
                        //src="https://cdn-icons-png.flaticon.com/512/1016/1016736.png"
                         src="https://cdn-icons-png.flaticon.com/512/7931/7931647.png"
                         alt=""/>
                </div>
                <h4 className={s.description}>Description here</h4>
            </div>
        </>
    )
}