import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import type { TState } from './state'
import { getCategoriesData } from './action'
import { transformToCategories } from "@/model/transform/category"
import { Category } from "@/model/category";

const onGetCategoriesBuilder = (builder: ActionReducerMapBuilder<TState>): ActionReducerMapBuilder<TState> => {
    return builder.addCase(getCategoriesData.pending, (state) => {
        state.LoadingData = true
    }).addCase(getCategoriesData.fulfilled, (state, { payload }) => {
        state.LoadingData = false
        const data: Array<any> = payload.data as Array<any> ?? []
        const categories: Array<Category> = transformToCategories(data)
        console.log(categories);
        
        state.Categories = categories
        
    }).addCase(getCategoriesData.rejected, (state, { payload }) => {
        state.LoadingData = false
        console.log(payload);
        state.Categories = []
    })
}

const extraReducers = (builder: ActionReducerMapBuilder<TState>) => {
    onGetCategoriesBuilder(builder);
}

export default extraReducers