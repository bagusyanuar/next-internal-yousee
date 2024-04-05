import { AxiosServer, WithAuthRoute } from "@/lib/api"
import { JSONResponse, JSONSuccessResponse } from "@/lib/jsonResponse"
import { Category } from "@/model/category"
import { transformToCategories } from "@/model/transform/category"
import axios, { AxiosError, AxiosResponse } from "axios"
import { cookies } from 'next/headers'
import { getIronSession, SessionData } from 'iron-session'
import { sessionOptions, User } from '@/lib/session'

const prefix = '/media-type'

export async function GET(request: Request) {
    return await GetCategoryHandler(request)
}

export async function POST(request: Request) {
    return await PostCategoryHandler(request)
}

const GetCategoryHandler = async (request: Request): Promise<Response> => {
    try {
        const session = await getIronSession<SessionData>(cookies(), sessionOptions)
        AxiosServer.defaults.headers.common["Content-Type"] = 'application/json'
        AxiosServer.defaults.headers.common.Authorization = `Bearer ${session.token}`
        AxiosServer.defaults.headers.common['Cookie'] = session.cookieUser
        const queryURL = new URL(request.url)
        const searchParam = new URLSearchParams(queryURL.searchParams)
        const name: string = searchParam.get('name') ?? ''
        const page: string = searchParam.get('page') ?? '1'
        const perPage: string = searchParam.get('perpage') ?? '10'
        let url = `${prefix}?name=${name}&page=${page}&per_page=${perPage}`
        const response: AxiosResponse = await AxiosServer.get(url)
        const message: string = response?.data.message
        const meta: any = response?.data.meta
        const data: Array<any> = response?.data.data as Array<any> ?? []
        console.log('success');
        
        return JSONSuccessResponse({ message: message, data: data, meta: meta })
    } catch (error: any | AxiosError) {
        let code: number = 500
        let message: string = 'internal server error'
        if (axios.isAxiosError(error)) {
            code = error.response ? error.response?.status : 500
            message = error.response ? error.response.data.message : 'internal server error'
            console.log('test error');
            
        }
        return JSONResponse(code, { message: message })
    }
}

const PostCategoryHandler = async (request: Request): Promise<Response> => {
    try {
        const session = await getIronSession<SessionData>(cookies(), sessionOptions)
        AxiosServer.defaults.headers.common["Content-Type"] = 'multipart/form-data'
        AxiosServer.defaults.headers.common.Authorization = `Bearer ${session.token}`
        const form = await request.formData()
        let url = `${prefix}`
        const response: AxiosResponse = await AxiosServer.post(url, form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        const message: string = response?.data.message
        return JSONSuccessResponse({ message: message })
    } catch (error: any | AxiosError) {
        let code: number = 500
        let message: string = 'internal server error'
        if (axios.isAxiosError(error)) {
            code = error.response ? error.response?.status : 500
            message = error.response ? error.response.data.message : 'internal server error'
        }
        return JSONResponse(code, { message: message })
    }
}