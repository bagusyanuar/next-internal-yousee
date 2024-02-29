import {
    JSONSuccessResponse,
    JSONErrorResponse,
    JSONUnauthorizedResponse,
} from '@/lib/jsonResponse'
import { LoginRequest } from '@/model/auth'

export const LoginHandler = async (request: Request): Promise<Response> => {
    try {
        const body = await request.json() as LoginRequest
        if (body.Username === 'admin' && body.Password === 'admin') {
            return JSONSuccessResponse({message: 'success'})
        }
        return JSONUnauthorizedResponse({message: 'username and password did not match'})
    } catch (error) {
        return JSONErrorResponse({message: 'internal server error'})
    }
}