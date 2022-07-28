import {v1} from "uuid";
import {ActionsTypes, DialogsPageType} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

    if (action.type === ADD_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messagesData.push({id: v1(), messages: body, time: "00:00"})
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    }
    return state;
}