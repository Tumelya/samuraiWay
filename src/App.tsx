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
import {addPost, updateNewPostText} from './redux/state'
import {state} from './redux/state'
import {Friends} from "./components/Friends/Friends";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Navbar friends={state.friends}/>
            <div className="content">
                <Route path="/profile" render={() => <Profile postsData={state.profilePage.postsData}
                                                              addPost={addPost}
                                                              updateNewPostText={updateNewPostText}
                                                              newPostText={state.profilePage.newPostText}/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsData={state.dialogsData}
                                                              messagesData={state.messagesData}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/friends" render={() => <Friends friends={state.friends}/>}/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
