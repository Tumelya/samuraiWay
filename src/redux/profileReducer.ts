import {v1} from "uuid";
import {ActionsTypes, PostsDataType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

let InitialState = {
    newPostText: "",
    postsData: [
        {_id: v1(), message: "Hi! Hello! Have a good day!!", likesCount: 33},
        {
            _id: v1(),
            message: "I started learning how to play the piano today! I'm so happy! My dreams come true!",
            likesCount: 57
        },
        {_id: v1(), message: "I'm a creative person! Tell u where I'm looking for inspiration?", likesCount: 6},
        {_id: v1(), message: "My life is awesome!!!", likesCount: 28}
    ]
}

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsDataType = {
                _id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
}