import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import type { TState } from './state'
import { submit } from './action'
import { toast } from "react-toastify";

const onSubmitBuilder = (builder: ActionReducerMapBuilder<TState>): ActionReducerMapBuilder<TState> => {
    return builder.addCase(submit.pending, (state) => {
        state.LoadingLogin = true
    }).addCase(submit.fulfilled, (state, { payload }) => {
        state.LoadingLogin = false
        toast.success('oke')
        console.log(payload);
    }).addCase(submit.rejected, (state, { payload }) => {
        state.LoadingLogin = false
        console.log(payload);
    })
}

const extraReducers = (builder: ActionReducerMapBuilder<TState>) => {
    onSubmitBuilder(builder);
}

export default extraReducers