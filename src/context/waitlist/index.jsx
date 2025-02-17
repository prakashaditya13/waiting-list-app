import React, { useState, useContext, createContext } from "react";
import { inviteCodes } from "../../config";

export const WaitlistContext = createContext();

export const WaitlistProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    const CreateUser = (name, inviteCode) => {
        const isPriority = inviteCode ? inviteCodes.includes(inviteCode) : false
        setUsers((prevState) => {
            const newUser = {
                id: prevState.length + 1,
                name,
                inviteCode: inviteCode || null,
                position: prevState.length + 1,
                isPriority
            }

            // Customize or filter the previous state user array according to the new user created
            const priorityUsers = prevState.filter((user) => user.isPriority);
            const generalUsers = prevState.filter((user) => !user.isPriority);

            return isPriority ? [...priorityUsers, newUser, ...generalUsers] : [...priorityUsers, ...generalUsers, newUser];
        })
    }

  return (
    <WaitlistContext.Provider value={{users, CreateUser}}>
        {children}
    </WaitlistContext.Provider>
  );
};
