import React from 'react';
import './App.css';

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";

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
