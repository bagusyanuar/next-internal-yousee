import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios';
import { APIResponse } from '@/lib/jsonResponse'
import { ThunkConfig, RejectToAPIResponse } from '@/lib/redux'
import { InternalAPI } from '@/lib/route'

export const getCategoriesData = createAsyncThunk<APIResponse, void, ThunkConfig>('login/submit', async (_, { rejectWithValue, getState }) => {
    try {
        const state = getState()
        const pagination = state.categories.Pagination
        const url = `${InternalAPI.getCategories}?name=&page=${pagination.Page}&per_page=${pagination.PerPage}`
        const response = await axios.get(url);
        return response.data
    } catch (error: any | AxiosError) {
        return rejectWithValue(RejectToAPIResponse(error))
    }
})