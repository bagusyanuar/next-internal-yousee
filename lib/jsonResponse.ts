export type APIResponse = {
    code: number
    message: string
    data?: any
    meta?: any
}

type TResponse = {
    message?: string
    data?: any
    meta?: any
}
export const JSONSuccessResponse = ({
    message = 'success',
    data = null,
    meta = null
}: TResponse): Response => {
    const code = 200
    let jsonBody: APIResponse = {
        code: 200,
        message,
        data,
        meta
    }
    return Response.json(jsonBody, { status: code })
}

export const JSONErrorResponse = ({
    message = '',
    data = null,
    meta = null
}: TResponse): Response => {
    const code = 500
    let jsonBody: APIResponse = {
        code,
        message,
        data,
        meta
    }
    return Response.json(jsonBody, { status: code })
}

export const JSONUnauthorizedResponse = ({
    message = '',
    data = null,
    meta = null
}: TResponse): Response => {
    const code = 401
    let jsonBody: APIResponse = {
        code: 401,
        message,
        data,
        meta
    }
    return Response.json(jsonBody, { status: code })
}