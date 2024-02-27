import Table from './table'
import TableHeader from './table.header'

export type THeader = {
    name: string
    width?: string
    align?: 'left' | 'center' | 'right'
}

export {
    Table,
    TableHeader
}