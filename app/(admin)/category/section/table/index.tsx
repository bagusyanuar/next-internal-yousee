'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import TableServer, { TColumn } from '@/components/table/server'
import Loader from '@/components/loader/loader.dots'
import Table from '@/components/table'
import TableFilter from './filter'
import TableHeader from './head'
import TableBody from './body'
import TablePagination from './pagination'
import ModalConfirmation from '@/components/modal/modal.confirmation'
import type { Category } from '@/model/category'

import {
    CategoriesState,
    SetModalConfirmation
} from '@/redux/categories/slice'
import { FindAll } from '@/redux/categories/action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const Datatable: React.FC = () => {
    const router = useRouter()
    const StateCategory = useAppSelector(CategoriesState)
    const dispatch = useAppDispatch()
    const [loading, setloading] = useState<boolean>(false)

    const handleDeleteCategory = (categoryID: number) => {
        dispatch(SetModalConfirmation(true))
    }

    const handleEditCategory = (categoryID: number) => {
        const url: string = `/category/${categoryID}`
        router.push(url)
    }

    const initialPage = useCallback(() => {
        dispatch(FindAll())
    }, [dispatch])

    useEffect(() => {
        initialPage()
        return () => { }
    }, [initialPage])

    const Columns: Array<TColumn<Category>> = [
        {
            title: '#',
            selector: (row, index) => (index + 1),
            align: 'center',
            width: '3rem'
        },
        {
            title: 'Name',
            selector: (row) => row.Name,
            sort: true
        },
        {
            title: 'Action',
            align: 'center',
            width: '10rem'
        },
    ]

    const handleSort = (key: string, direction: 'asc' | 'desc') => {
        dispatch(FindAll())
    }
    return (
        <Wrapper>
            <TableServer
                onProcess={StateCategory.LoadingData}
                columns={Columns}
                data={[
                    { ID: 1, Name: 'Baliho', Icon: null },
                    { ID: 2, Name: 'Billboard', Icon: null },
                ]}
                onSort={handleSort}
            />
            {/* {
                StateCategory.LoadingData ?
                    <Loader height='24rem' />
                    : <>
                        <TableFilter />
                        <Table>
                            <TableHeader />
                            <TableBody
                                data={StateCategory.Categories}
                                onDelete={handleDeleteCategory}
                                onEdit={handleEditCategory}
                            />
                        </Table>
                        <TablePagination />
                    </>
            } */}
            <ModalConfirmation
                open={StateCategory.ModalConfirmation}
                text='Are you sure to delete category?'
                type='delete'
                onAccept={() => { }}
                onDenied={() => {
                    dispatch(SetModalConfirmation(false))
                }}
                onBackdropClick={() => {
                    dispatch(SetModalConfirmation(false))
                }}
            />
        </Wrapper>
    )
}

export default Datatable

const Wrapper = styled.div`
    width: 100%;
    margin-top: 1rem;
`