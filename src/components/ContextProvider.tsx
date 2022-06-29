import React, { useState } from "react";
import FriendsContext, { Friends } from './FriendsContext';


const FriendsContextProvider: React.FC = props => {
    const [friends, setFriends] = useState<Friends[]>([]);
    const addFriend1 = ( id:string, name:string, description:string, gender:string, image:string) => {
        const newFriend: Friends ={
            id:id,
            name:name,
            description:description,
            gender:gender,
            image:image
        }
        setFriends((currFriend) => {return currFriend.concat(newFriend)})
     };

    const deleteFriend1 = (id:string) => { 
        for(let i=0 ;i<friends.length; i++){
            if(friends[i].id ==id){
                friends.splice(i,1);
                break;
            }
        }
    }
    
    return (
        <FriendsContext.Provider value={{
            friends,
            addFriend: addFriend1,
            deleteFriend: deleteFriend1
        }}>
            {props.children}
        </FriendsContext.Provider>
    );
};
export default FriendsContextProvider;


