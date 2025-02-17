import { useContext } from "react";
import { WaitlistContext } from "../../context/waitlist";

/**
 * Custom hook to access the WaitlistContext.
 * 
 * Ensures that the hook is used within a `WaitlistProvider` component.
 * 
 * @returns {object} The context value containing `users` array and `CreateUser` function.
 * @throws Will log an error if the hook is used outside of `WaitlistProvider`.
 */

export const useWaitlist = () => {
    const context = useContext(WaitlistContext);
    if(!context) console.error("Waitlist context must be in waitlistProvider!!")
    return context
}