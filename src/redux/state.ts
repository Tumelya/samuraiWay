import {v1} from "uuid";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export type DialogsDataType = {
    id: number
    ava: string
    name: string
}
export type MessagesDataType = {
    id: string
    messages: string
    time: string
}
export type PostsDataType = {
    _id: string
    message: string
    likesCount: number
}
export type FriendsType = {
    id: number
    ava: string
    name: string
}
export type ProfilePageType = {
    postsData: Array<PostsDataType>
    newPostText: string
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageBody: string
}
export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    friends: Array<FriendsType>
}

export type StoreType = {
    _state: RootStateType,
    getState: () => RootStateType,
    rerenderEntireTree: () => void,
    subscribe: (observer: () => void) => void,
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
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


export let store: StoreType = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    ava: "https://cdn-icons.flaticon.com/png/512/3404/premium/3404417.png?token=exp=1658063498~hmac=9004bed658a475d3b3e181553818eee6",
                    name: "Maksim"
                },
                {
                    id: 2,
                    ava: "https://cdn-icons-png.flaticon.com/512/7665/7665682.png",
                    name: "Maria"
                },
                {
                    id: 3,
                    ava: "https://cdn-icons.flaticon.com/png/512/2423/premium/2423917.png?token=exp=1658062838~hmac=87d38e50bc4b82ec370b97ff5a53a723",
                    name: "Merve"
                },
                {
                    id: 4,
                    ava: "https://cdn-icons.flaticon.com/png/512/3667/premium/3667820.png?token=exp=1658064393~hmac=d9a03a2aff29f2937720ce1e088d34bc",
                    name: "Robb"
                },
                {
                    id: 5,
                    ava: "https://cdn-icons.flaticon.com/png/512/3136/premium/3136101.png?token=exp=1658062917~hmac=533467193df287053ba0140da248f0b0",
                    name: "Alex"
                }
            ],
            messagesData: [
                {id: v1(), messages: "hi", time: "10:00"}, {id: v1(), messages: "what's up", time: "10:01"},
                {id: v1(), messages: "yo", time: "10:02"}, {id: v1(), messages: "nice look", time: "10:03"}
            ],
            newMessageBody: ""
        },
        profilePage: {
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
        },
        friends: [
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
                ava: "https://cdn-icons.flaticon.com/png/512/2423/premium/2423917.png?token=exp=1658062838~hmac=87d38e50bc4b82ec370b97ff5a53a723",
                name: "Merve"
            },
            {
                id: 4,
                ava: "https://cdn-icons.flaticon.com/png/512/3136/premium/3136101.png?token=exp=1658062917~hmac=533467193df287053ba0140da248f0b0",
                name: "Alex"
            },
            {
                id: 5,
                ava: "https://cdn-icons-png.flaticon.com/512/3284/3284076.png",
                name: "Meira"
            },
            {
                id: 6,
                ava: "https://cdn-icons.flaticon.com/png/512/2423/premium/2423845.png?token=exp=1658063305~hmac=fb55b129f657d69deb41db9e42715ac4",
                name: "Martina"
            },
            {
                id: 7,
                ava: "https://cdn-icons-png.flaticon.com/512/2945/2945506.png",
                name: "Michael"
            },
            {
                id: 8,
                ava: "https://cdn-icons-png.flaticon.com/512/3667/3667290.png",
                name: "Murphy"
            },
            {
                id: 9,
                ava: "https://cdn-icons-png.flaticon.com/512/7206/7206468.png",
                name: "Margo"
            },
            {
                id: 10,
                ava: "https://cdn-icons-png.flaticon.com/512/7774/7774710.png",
                name: "Melissa"
            }
        ]
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log("");
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this.rerenderEntireTree();
    }
}
