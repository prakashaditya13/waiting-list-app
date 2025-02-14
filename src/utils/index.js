import { inviteCodes } from "../config"

export const IsValidInviteCode = (inviteCode) => inviteCodes.includes(inviteCode)