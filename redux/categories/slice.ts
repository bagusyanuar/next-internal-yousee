import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
import initialState from './state'

const slice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        Reset: () => initialState,
        SetPerPage: (state, action: PayloadAction<number>) => {
            state.Pagination.PerPage = action.payload
        },
    }
})

export const {
    Reset,
    SetPerPage
} = slice.actions

export const CategoriesState = (state: RootState) => state.categories
export default slice.reducer