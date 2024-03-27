import { AxiosServer, WithAuthRoute } from "@/lib/api"
import { JSONResponse, JSONSuccessResponse } from "@/lib/jsonResponse"
import axios, { AxiosError, AxiosResponse } from "axios"

export async function GET(request: Request) {
    return await WithAuthRoute(GetCategoryHandler(request))
}

const prefix = '/media-type'
const GetCategoryHandler = async (request: Request): Promise<Response> => {
    try {
        const queryURL = new URL(request.url)
        const searchParam = new URLSearchParams(queryURL.searchParams)
        const name: string | null = searchParam.get('name')
        const page: string | null = searchParam.get('page')
        const perPage: string | null = searchParam.get('perpage')
        let url = `${prefix}?name=${name}&page=${page}&per_page=${perPage}`
        console.log(name);
        const response: AxiosResponse = await AxiosServer.get(url)
        const message: string = response?.data.message
        const meta: any = response?.data.meta
        const data = response?.data.data

        return JSONSuccessResponse({ message: message, data: data, meta: meta })
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