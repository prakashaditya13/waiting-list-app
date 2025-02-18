import React, { useState, createContext, useCallback } from "react";
import { inviteCodes as immutableInviteCodes } from "../../config";

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
  const [users, setUsers] = useState([]);

  /**
   * Adds a new user to the waitlist.
   *
   * @param {string} name - The name of the user being added
   * @param {string | null} inviteCode - An optional invite code for priority users
   */

  const CreateUser = useCallback(
    (name, inviteCode) => {
      const isPriority = inviteCode
        ? immutableInviteCodes.includes(inviteCode)
        : false;
      setUsers((prevState) => {
        const newUser = {
          id: prevState.length + 1,
          name,
          inviteCode: inviteCode || null,
          position: prevState.length + 1,
          isPriority,
        };
        const [priorityUsers, generalUsers] = prevState.reduce(
          ([priority, general], user) => {
            user.isPriority ? priority.push(user) : general.push(user);
            return [priority, general];
          },
          [[], []]
        );
        return isPriority
          ? [...priorityUsers, newUser, ...generalUsers]
          : [...priorityUsers, ...generalUsers, newUser];
      });
    },
    [immutableInviteCodes, setUsers]
  );

  return (
    <WaitlistContext.Provider value={{ users, CreateUser }}>
      {children}
    </WaitlistContext.Provider>
  );
};
