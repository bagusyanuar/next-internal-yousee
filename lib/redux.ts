import axios, { AxiosError } from 'axios'
import type { RootState } from '@/redux/store'
import { APIResponse } from './jsonResponse'

export type ThunkConfig = {
    state: RootState,
    rejectValue: APIResponse
}

export const RejectToAPIResponse = (error: any | AxiosError): APIResponse => {
    let response: APIResponse = {
        code: 500,
        message: 'internal server error',
        data: null
    }

    if (axios.isAxiosError(error) && error.response) {
        response.code = error.response.data.code
        response.message = error.response.data.message;
        response.data = error.response.data.data;
        response.meta = error.response.data.meta;
    }
    return response
}