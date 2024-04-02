import { AxiosServer, WithAuthRoute } from "@/lib/api"
import { JSONResponse, JSONSuccessResponse } from "@/lib/jsonResponse"
import axios, { AxiosError, AxiosResponse } from "axios"

export async function GET(request: Request) {
    return await WithAuthRoute(GetStatisticInfoHandler(request))
}

const url = '/dashboard/statistic-info'
const GetStatisticInfoHandler = async (request: Request): Promise<Response> => {
    try {
        const response: AxiosResponse = await AxiosServer.get(url)
        const message: string = response?.data.message
        const data = response?.data.data
        console.log(data);
        
        return JSONSuccessResponse({ message: message, data: data })
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