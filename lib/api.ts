import axios, { AxiosInstance } from "axios"
import { cookies } from 'next/headers'
import { getIronSession, SessionData } from 'iron-session'
import { sessionOptions, User } from '@/lib/session'

export const SERVER_URL: string | undefined = process.env.SERVER_URL as string

export const AxiosServer: AxiosInstance = axios.create({
    baseURL: `${SERVER_URL}/api`,
    headers: {
        "Content-Type": 'application/json'
    },
    withCredentials: true
})

export const WithAuthRoute = async (handler: Promise<Response>): Promise<Response> => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions)
    AxiosServer.defaults.headers.common["Content-Type"] = 'application/json'
    AxiosServer.defaults.headers.common.Authorization = `Bearer ${session.token}`
    AxiosServer.defaults.headers.common['Cookie'] = session.cookieUser
    console.log(AxiosServer.defaults.headers.common);
    return await handler
}