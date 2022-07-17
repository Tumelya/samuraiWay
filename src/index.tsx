import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogsData = [
    {id: 1, name: "Maksim"}, {id: 2, name: "Maria"},
    {id: 3, name: "Marta"}, {id: 4, name: "Alex"}
]
let messagesData = [
    {id: 1, messages: "hi"}, {id: 2, messages: "what's up"},
    {id: 3, messages: "yo"}, {id: 4, messages: "nice look"}
]
let postsData = [
    {id: 1, message: "Hi!", likesCount: 33},
    {id: 2, message: "How are you?", likesCount: 57},
    {id: 3, message: "Hi!", likesCount: 6},
    {id: 4, message: "Hi!", likesCount: 28}
]

ReactDOM.render(
    <App dialogsData={dialogsData}
         messagesData={messagesData}
         postsData={postsData}
    />,
  document.getElementById('root')
);