export async function GET(request: Request) {
    return Response.json({
        app: 'yousee_internal',
        version: '1.0.1'
    }, { status: 200 })
}