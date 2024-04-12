import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import type { TState } from './state'
import { FindAll, } from './action'
import { transformToVendors } from "@/model/transform/vendor"
import { Vendor } from "@/model/vendor";

const onFindALLBuilder = (builder: ActionReducerMapBuilder<TState>): ActionReducerMapBuilder<TState> => {
    return builder.addCase(FindAll.pending, (state) => {
        state.LoadingData = true
    }).addCase(FindAll.fulfilled, (state, { payload }) => {
        state.LoadingData = false
        const data: Array<any> = payload.data as Array<any> ?? []
        const vendors: Array<Vendor> = transformToVendors(data)
        state.Vendors = vendors
        const meta: any = payload.meta
        if (meta) {
            state.Pagination.Rows = meta['total_rows']
            state.Pagination.Page = meta['page']
            state.Pagination.TotalPage = meta['total_page']
        }
    }).addCase(FindAll.rejected, (state, { payload }) => {
        state.LoadingData = false
        console.log(payload);
        state.Vendors = []
    })
}

const extraReducers = (builder: ActionReducerMapBuilder<TState>) => {
    onFindALLBuilder(builder);
}

export default extraReducers