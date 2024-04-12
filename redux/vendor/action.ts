import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios';
import { APIResponse } from '@/lib/jsonResponse'
import { ThunkConfig, RejectToAPIResponse } from '@/lib/redux'
import { InternalAPI } from '@/lib/route'
import { List } from '@/data/vendor'

export const FindAll = createAsyncThunk<APIResponse, void, ThunkConfig>('vendor/getList', async (_, { rejectWithValue, getState }) => {
    try {
        const state = getState()
        const pagination = state.vendor.Pagination
        // const url = `${InternalAPI.getCategories}?name=&page=${pagination.Page}&per_page=${pagination.PerPage}`
        // const response = await axios.get(url);
        // return response.data
        await new Promise((resolve) => setTimeout(resolve, 2500));
        const response: APIResponse = {
            code: 200,
            message: 'successfully show vendor',
            data: List,
            meta: {
                page: 1,
                per_page: 10,
                total_page: 1,
                total_rows: List.length
            }
        }
        return response
    } catch (error: any | AxiosError) {
        return rejectWithValue(RejectToAPIResponse(error))
    }
})