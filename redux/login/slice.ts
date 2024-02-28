import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
import initialState from './state'

const slice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        Reset: () => initialState,
        SetUsername: (state, action: PayloadAction<string>) => {
            state.Username = action.payload
        },
        SetPassword: (state, action: PayloadAction<string>) => {
            state.Password = action.payload
        },
        SetRememberMe: (state, action: PayloadAction<boolean>) => {
            state.RememberMe = action.payload
        },
        SetLoadingLogin: (state, action: PayloadAction<boolean>) => {
            state.LoadingLogin = action.payload
        },

    }
})

export const {
    Reset,
    SetUsername,
    SetPassword,
    SetRememberMe,
    SetLoadingLogin
} = slice.actions

export const LoginState = (state: RootState) => state.login
export default slice.reducer
