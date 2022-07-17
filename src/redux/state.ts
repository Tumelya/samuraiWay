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
export type RootStateType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    postsData: Array<PostsDataType>
    friends: Array<FriendsType>
}

export let state: RootStateType = {
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
        {id: 1, messages: "hi", time: "10:00"}, {id: 2, messages: "what's up", time: "10:01"},
        {id: 3, messages: "yo", time: "10:02"}, {id: 4, messages: "nice look", time: "10:03"}
    ],
    postsData: [
        {id: 1, message: "Hi!", likesCount: 33},
        {id: 2, message: "How are you?", likesCount: 57},
        {id: 3, message: "Hi!", likesCount: 6},
        {id: 4, message: "Hi!", likesCount: 28}
    ],
    friends: [
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
        }
    ]
}