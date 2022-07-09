import React from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";


function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Footer/>
            <Profile/>
        </div>
    )
}

export default App;
