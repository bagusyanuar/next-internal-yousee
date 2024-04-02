import { cookies } from 'next/headers'
import { getIronSession, SessionData } from 'iron-session'
import { JSONSuccessResponse } from '@/lib/jsonResponse'
import { sessionOptions } from '@/lib/session'
import {
    LoginHandler
} from './handler'

export async function POST(request: Request) {
    return await LoginHandler(request)
}

