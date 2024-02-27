import { SessionOptions } from 'iron-session'

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_SESSION as string,
    cookieName: 'user',
}

export type User = {
    username: string
    role: string
}

declare module 'iron-session' {
    interface SessionData {
        token?: string,
        user?: User
    }
}