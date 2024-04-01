import { Category } from "@/model/category";

type TPagination = {
    PageLength: Array<number>
    PerPage: number
    Page: number
}

export type TState = {
    Pagination: TPagination
    Query: string
    Categories: Array<Category>
}

const initialState: TState = {
    Pagination: {
        PageLength: [10, 25, 50],
        PerPage: 10,
        Page: 1
    },
    Query: '',
    Categories: []
}

export default initialState