import React, { useState, useContext, createContext } from "react";
import { inviteCodes } from "../../config";

/**
 * Context for managing the waitlist state globally.
 * Provides `users` array and `CreateUser` function to all child components.
 */

export const WaitlistContext = createContext();

/**
 * WaitlistProvider component that wraps children components and provides the waitlist context.
 * 
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Child components that will have access to the waitlist context
 * @returns {JSX.Element} A context provider component
 */

export const WaitlistProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    /**
     * Adds a new user to the waitlist.
     * 
     * @param {string} name - The name of the user being added
     * @param {string | null} inviteCode - An optional invite code for priority users
     */

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

             // Separate priority users and general users from the current state
            const priorityUsers = prevState.filter((user) => user.isPriority);
            const generalUsers = prevState.filter((user) => !user.isPriority);

             // Add new user in the correct position based on priority
            return isPriority ? [...priorityUsers, newUser, ...generalUsers] : [...priorityUsers, ...generalUsers, newUser];
        })
    }

  return (
    <WaitlistContext.Provider value={{users, CreateUser}}>
        {children}
    </WaitlistContext.Provider>
  );
};
