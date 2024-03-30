type TPagination = {
    PageLength: Array<number>
    PerPage: number
}

export type TState = {
    Pagination: TPagination
}

const initialState: TState = {
    Pagination: {
        PageLength: [10, 25, 50],
        PerPage: 10
    }
}

export default initialState