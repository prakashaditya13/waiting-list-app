import { useContext } from "react";
import { WaitlistContext } from "../../context/waitlist";

export const useWaitlist = () => {
    const context = useContext(WaitlistContext);
    if(!context) console.error("Waitlist context must be in waitlistProvider!!")
    return context
}