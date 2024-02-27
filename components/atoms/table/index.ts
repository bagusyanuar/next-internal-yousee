import Table from './table'
import TR from './tr'
import TD from './td'
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
    TR,
    TD,
    TableHeader,
    TableRowBody,
    TableRowData
}