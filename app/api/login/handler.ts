import { AxiosServer } from '@/lib/api'
import {
    JSONSuccessResponse,
    JSONErrorResponse,
    JSONUnauthorizedResponse,
    JSONResponse,
} from '@/lib/jsonResponse'
import { LoginRequest } from '@/model/auth'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { cookies } from 'next/headers'
import { getIronSession, SessionData } from 'iron-session'
import { sessionOptions } from '@/lib/session'

const url: string = '/sign-in'
type TData = {
    access_token: string
}
export const LoginHandler = async (request: Request): Promise<Response> => {
    try {
        const body: LoginRequest = await request.json() as LoginRequest
        const requestBody = {
            "username": body.Username,
            "password": body.Password
        }
        const response: AxiosResponse = await AxiosServer.post(url, JSON.stringify(requestBody))
        const message: string = response?.data.message
        const data: TData = response?.data.data as TData
        const cookieHeaders: Array<string> = response.headers['set-cookie'] ?? []
        let cookieAuth: string = ''
        if (cookieHeaders.length > 0) {
            cookieAuth = cookieHeaders[0]
        }
        AxiosServer.defaults.headers.common.Authorization = `Bearer ${data.access_token}`
        AxiosServer.defaults.headers.common['Cookie'] = cookieAuth

        console.log(cookieAuth);
        
        // const data: TData = response?.data.data as TData
        // const session = await getIronSession<SessionData>(cookies(), sessionOptions)
        // session.token = data.access_token
        // await session.save()
        return JSONSuccessResponse({ message: message })
    } catch (error: any | AxiosError) {
        let code: number = 500
        let message: string = 'internal server error'
        if (axios.isAxiosError(error)) {
            code = error.response ? error.response?.status : 500
            message = error.response ? error.response.data.message : 'internal server error'
            console.log(error.response?.data)

        }
        return JSONResponse(code, { message: message })
    }
}