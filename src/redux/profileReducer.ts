import {v1} from "uuid";
import {ActionsTypes, PostsDataType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

    if (action.type === ADD_POST) {
        let newPost: PostsDataType = {
            _id: v1(),
            message: state.newPostText,
            likesCount: 0
        }
        state.postsData.push(newPost);
        state.newPostText = "";
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }
    return state;
}