import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios';
import { APIResponse } from '@/lib/jsonResponse'
import { ThunkConfig, RejectToAPIResponse } from '@/lib/redux'
import { LoginRequest } from '@/model/auth'
import { InternalAPI } from '@/lib/route'


export const submit = createAsyncThunk<APIResponse, void, ThunkConfig>('login/submit', async (_, { rejectWithValue, getState }) => {
    try {
        const state = getState()
        const body: LoginRequest = {
            Username: state.login.Username,
            Password: state.login.Password,
            RememberMe: state.login.RememberMe
        }
        const response = await axios.post(InternalAPI.login, body);
        return response.data
    } catch (error: any | AxiosError) {
        return rejectWithValue(RejectToAPIResponse(error))
    }
})