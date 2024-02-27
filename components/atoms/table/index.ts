import Table from './table'
import TableHeader from './table.header'
import TableRowBody from './table.row.body'
import TableRowData from './table.row.data'

export type THeader = {
    name: string
    width?: string
    align?: 'left' | 'center' | 'right'
}

export {
    Table,
    TableHeader,
    TableRowBody,
    TableRowData
}