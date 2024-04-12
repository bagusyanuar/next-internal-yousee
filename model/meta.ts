export type TPagination = {
    PageLength: Array<number>
    PerPage: number
    Page: number
    Rows: number
    TotalPage: number
}

export type TSort = {
    Column: string
    Direction: 'asc' | 'desc'
}

export const defaultPagination: TPagination = {
    PageLength: [10, 25, 50],
    PerPage: 10,
    Page: 1,
    Rows: 0,
    TotalPage: 0
}