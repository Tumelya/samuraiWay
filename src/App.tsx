import React from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
export type DialogsDataType = {
    id: number
    ava: string
    name: string
}
export type MessagesDataType = {
    id: number
    messages: string
    time: string
}
export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
export type FriendsType = {
    id: number
    ava: string
    name: string
}
export type DataType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    postsData: Array<PostsDataType>
    friends: Array<FriendsType>
}
type AppPropsType = {
    state: any/*<DataType>*/
}
function App(props: AppPropsType) {
    return (
            <div className="App">
                <Header/>
                <Navbar friends={props.state.friends}/>
                <div className="content">
                    <Route path="/profile" render={() => <Profile postsData={props.state.postsData}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogsData={props.state.dialogsData} messagesData={props.state.messagesData}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
                <Footer/>
            </div>
    )
}

export default App;
