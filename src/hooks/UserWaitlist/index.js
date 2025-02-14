import { useContext } from "react";
import { WaitlistContext } from "../../context/waitlist";

export const useWaitlist = () => {
    const context = useContext(WaitlistContext);
    return context
}