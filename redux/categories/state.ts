import { Category } from "@/model/category";

type TEntity = {
    Name: string
}

const defaultEntity: TEntity = {
    Name: '',
}

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
    LoadingSave: boolean
    ModalConfirmation: boolean
    Categories: Array<Category>
    Entity: TEntity
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
    LoadingSave: false,
    ModalConfirmation: false,
    Categories: [],
    Entity: defaultEntity
}

export default initialState