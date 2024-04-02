export type TState = {
    Username: string
    Password: string
    RememberMe: boolean
    LoadingLogin: boolean
}

const initialState: TState = {
    Username: '',
    Password: '',
    RememberMe: false,
    LoadingLogin: false
}

export default initialState