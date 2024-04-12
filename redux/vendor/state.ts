import type { Vendor } from '@/model/vendor'
import { TPagination, TSort, defaultPagination } from '@/model/meta'

export type TState = {
    Pagination: TPagination
    Query: string
    Sort: TSort | undefined
    LoadingData: boolean
    LoadingSave: boolean
    ModalConfirmation: boolean
    Vendors: Array<Vendor>
}

const initialState: TState = {
    Pagination: defaultPagination,
    Query: '',
    Sort: undefined,
    LoadingData: true,
    LoadingSave: false,
    ModalConfirmation: false,
    Vendors: [],
}

export default initialState
