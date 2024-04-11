export type TSORT = {
    key: string,
    defaultDirection: 'asc' | 'desc'
    onSort: (key: string, direction: 'asc' | 'desc') => void
}

export type HeaderSort = {
    key: string,
    defaultDirection: 'asc' | 'desc'
}

export interface TColumn<T> {
    title: string
    selector?: (row: T, index: number) => any
    align?: 'left' | 'center' | 'right'
    width?: string
    sort?: boolean
}