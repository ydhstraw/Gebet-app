import React from "react";

export interface Friends {
    id: string,
    name: string,
    description: string,
    gender: string,
    image:string
}

interface Context {
    friends: Friends[];
    addFriend: (id: string, name: string, description: string, gender: string, image:string) => void;
    deleteFriend: (id:string) => void;
}

const FriendsContext = React.createContext<Context>({
    friends: [],
    addFriend: () => { },
    deleteFriend: () => { }
});

export default FriendsContext;