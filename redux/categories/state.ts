type TPagination = {
    PageLength: Array<number>
    PerPage: number
    Page: number
}

export type TState = {
    Pagination: TPagination
}

const initialState: TState = {
    Pagination: {
        PageLength: [10, 25, 50],
        PerPage: 10,
        Page: 1
    }
}

export default initialState