import {v1} from "uuid";
import {ActionsTypes, DialogsPageType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    } as const
}
export const updateNewMessageBodyActionCreator = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

let InitialState = {
    dialogsData: [
        {
            id: 1,
            ava: "https://cdn-icons-png.flaticon.com/512/4509/4509624.png",
            name: "Maksim"
        },
        {
            id: 2,
            ava: "https://cdn-icons-png.flaticon.com/512/7665/7665682.png",
            name: "Maria"
        },
        {
            id: 3,
            ava: "https://cdn-icons-png.flaticon.com/512/6725/6725128.png",
            name: "Merve"
        },
        {
            id: 4,
            ava: "https://cdn-icons-png.flaticon.com/512/7923/7923349.png",
            name: "Robb"
        },
        {
            id: 5,
            ava: "https://cdn-icons-png.flaticon.com/512/6567/6567139.png",
            name: "Alex"
        }
    ],
    messagesData: [
        {id: v1(), messages: "hi", time: "10:00"}, {id: v1(), messages: "what's up", time: "10:01"},
        {id: v1(), messages: "yo", time: "10:02"}, {id: v1(), messages: "nice look", time: "10:03"}
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messagesData.push({id: v1(), messages: body, time: "00:00"});
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default: return state;
    }
}