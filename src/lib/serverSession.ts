import { authOptions } from '../lib/auth'
import { getServerSession } from "next-auth/next"

export const getSession = async () => {
    return await getServerSession(authOptions)
}