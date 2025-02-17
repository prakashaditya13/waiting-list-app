import { inviteCodes } from "../config"

export const IsValidInviteCode = (inviteCode) => inviteCodes.includes(inviteCode)

export const CalculateWaitTime = (position, isPriority) => {
    // const waitDays = isPriority ? Math.ceil(position / 2) : position;
    return position === 1 ? `${position} day` : `${position} days`
}