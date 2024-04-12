import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
import type { PayloadEntity } from '@/lib/redux'
import type { TSort } from '@/model/meta'
import initialState from './state'
import eventReducers from './events'

const slice = createSlice({
    name: 'vendor',
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
        SetLoadingSave: (state, action: PayloadAction<boolean>) => {
            state.LoadingSave = action.payload
        },
        SetModalConfirmation: (state, action: PayloadAction<boolean>) => {
            state.ModalConfirmation = action.payload
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
    SetSort,
    SetLoadingSave,
    SetModalConfirmation
} = slice.actions

export const VendorState = (state: RootState) => state.vendor
export default slice.reducer