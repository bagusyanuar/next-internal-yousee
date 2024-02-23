export type TState = {
    Username: string
    Password: string
    LoadingLogin: boolean
}

const initialState: TState = {
    Username: '',
    Password: '',
    LoadingLogin: false
}

export default initialState