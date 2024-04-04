import { Category } from "@/model/category";

type TPagination = {
    PageLength: Array<number>
    PerPage: number
    Page: number
    Rows: number
}

export type TSort = {
    Column: string
    Direction: 'asc' | 'desc'
}

export type TState = {
    Pagination: TPagination
    Query: string
    Sort: TSort | undefined
    LoadingData: boolean
    Categories: Array<Category>
}

const initialState: TState = {
    Pagination: {
        PageLength: [10, 25, 50],
        PerPage: 10,
        Page: 1,
        Rows: 0
    },
    Query: '',
    Sort: undefined,
    LoadingData: true,
    Categories: []
}

export default initialState