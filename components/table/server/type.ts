export type TSortDirectionOption = 'asc' | 'desc'

export type TSORT = {
    key: string,
    defaultDirection: TSortDirectionOption
    onSort: (key: string, direction: TSortDirectionOption) => void
}

export type HeaderSort = {
    key: string,
    defaultDirection: TSortDirectionOption
}

export type TSearch = {
    value: string
    onSearch: (value: string) => void
    placeholder?: string
}

export interface TColumn<T> {
    title: string
    selector?: (row: T, index: number) => any
    align?: 'left' | 'center' | 'right'
    width?: string
    sort?: boolean
}