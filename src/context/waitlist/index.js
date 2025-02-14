import React, { useState, useContext, createContext } from "react";

export const WaitlistContext = createContext();

export const WaitlistProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    const CreateUser = (name, inviteCode) => {
        setUsers((prevState) => {
            const newUser = {
                id: prevState.length + 1,
                name,
                inviteCode: inviteCode || null,
                position: prevState.length + 1,
            }

            return [...prevState, newUser]
        })
    }

  return (
    <WaitlistContext.Provider value={{users, CreateUser}}>
        {children}
    </WaitlistContext.Provider>
  );
};
