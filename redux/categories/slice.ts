import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
import initialState, { TSort } from './state'
import eventReducers from './events'

const slice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        Reset: () => initialState,
        SetLoadingData: (state, action: PayloadAction<boolean>) => {
            state.LoadingData = action.payload
        },
        SetPerPage: (state, action: PayloadAction<number>) => {
            state.Pagination.PerPage = action.payload
        },
        SetPage: (state, action: PayloadAction<number>) => {
            state.Pagination.Page = action.payload
        },
        SetQuery: (state, action: PayloadAction<string>) => {
            state.Query = action.payload
        },
        SetSort: (state, action: PayloadAction<TSort>) => {
            state.Sort = action.payload
        },


    },
    extraReducers: eventReducers,
})

export const {
    Reset,
    SetLoadingData,
    SetPerPage,
    SetPage,
    SetQuery,
    SetSort
} = slice.actions

export const CategoriesState = (state: RootState) => state.categories
export default slice.reducer