import { AxiosServer, WithAuthRoute } from "@/lib/api"
import { JSONResponse, JSONSuccessResponse } from "@/lib/jsonResponse"
import { Category } from "@/model/category"
import { transformToCategories } from "@/model/transform/category"
import axios, { AxiosError, AxiosResponse } from "axios"

export async function GET(request: Request) {
    console.log(AxiosServer.defaults.headers.common);
    return await WithAuthRoute(GetCategoryHandler(request))
}

const prefix = '/media-type'
const GetCategoryHandler = async (request: Request): Promise<Response> => {
    
    try {
        const queryURL = new URL(request.url)
        const searchParam = new URLSearchParams(queryURL.searchParams)
        const name: string = searchParam.get('name') ?? ''
        const page: string = searchParam.get('page') ?? '1'
        const perPage: string = searchParam.get('perpage') ?? '10'
        let url = `${prefix}?name=${name}&page=${page}&per_page=${perPage}`
        console.log(name);
        const response: AxiosResponse = await AxiosServer.get(url)
        const message: string = response?.data.message
        const meta: any = response?.data.meta
        const data: Array<any> = response?.data.data as Array<any> ?? []

        return JSONSuccessResponse({ message: message, data: data, meta: meta })
    } catch (error: any | AxiosError) {
        
        
        let code: number = 500
        let message: string = 'internal server error'
        if (axios.isAxiosError(error)) {
            code = error.response ? error.response?.status : 500
            message = error.response ? error.response.data.message : 'internal server error'
            // console.log(error.request);
            
        }
        return JSONResponse(code, { message: message })
    }
}