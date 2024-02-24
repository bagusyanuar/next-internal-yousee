import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
import initialState from './state'

const slice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        Reset: () => initialState,
        SetTitle: (state, action: PayloadAction<string>) => {
            state.Title = action.payload
        },
        SetSubTitle: (state, action: PayloadAction<string>) => {
            state.SubTitle = action.payload
        },
    }
})

export const {
    Reset,
    SetTitle,
    SetSubTitle
} = slice.actions

export const NavbarState = (state: RootState) => state.navbar
export default slice.reducer