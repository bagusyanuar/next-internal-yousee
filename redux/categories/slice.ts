import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
import initialState from './state'
import eventReducers from './events'

const slice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        Reset: () => initialState,
        SetPerPage: (state, action: PayloadAction<number>) => {
            state.Pagination.PerPage = action.payload
        },
        SetPage: (state, action: PayloadAction<number>) => {
            state.Pagination.Page = action.payload
        },
        SetQuery: (state, action: PayloadAction<string>) => {
            state.Query = action.payload
        },
        
    },
    extraReducers: eventReducers,
})

export const {
    Reset,
    SetPerPage,
    SetPage,
    SetQuery
} = slice.actions

export const CategoriesState = (state: RootState) => state.categories
export default slice.reducer