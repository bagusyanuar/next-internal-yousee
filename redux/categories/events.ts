import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import type { TState } from './state'
import { FindAll, createNewCategory } from './action'
import { transformToCategories } from "@/model/transform/category"
import { Category } from "@/model/category";

const onGetCategoriesBuilder = (builder: ActionReducerMapBuilder<TState>): ActionReducerMapBuilder<TState> => {
    return builder.addCase(FindAll.pending, (state) => {
        state.LoadingData = true
    }).addCase(FindAll.fulfilled, (state, { payload }) => {
        state.LoadingData = false
        const data: Array<any> = payload.data as Array<any> ?? []
        const categories: Array<Category> = transformToCategories(data)
        state.Categories = categories
        
    }).addCase(FindAll.rejected, (state, { payload }) => {
        state.LoadingData = false
        console.log(payload);
        state.Categories = []
    })
}

const onCreateCategoryBuilder = (builder: ActionReducerMapBuilder<TState>): ActionReducerMapBuilder<TState> => {
    return builder.addCase(createNewCategory.pending, (state) => {
        state.ModalConfirmation = false
        state.LoadingSave = true
    }).addCase(createNewCategory.fulfilled, (state, { payload }) => {
        state.LoadingSave = false
    }).addCase(createNewCategory.rejected, (state, { payload }) => {
        state.LoadingSave = false
    })
}

const extraReducers = (builder: ActionReducerMapBuilder<TState>) => {
    onGetCategoriesBuilder(builder);
    onCreateCategoryBuilder(builder);
}

export default extraReducers