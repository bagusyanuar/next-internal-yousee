'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import TableServer, { TColumn, TableAction } from '@/components/table/server'
import TablePagination from './pagination'
import ModalConfirmation from '@/components/modal/modal.confirmation'
import type { Category } from '@/model/category'

import {
    CategoriesState,
    SetModalConfirmation,
    SetPerPage,
    SetQuery
} from '@/redux/categories/slice'
import { FindAll } from '@/redux/categories/action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const Datatable: React.FC = () => {
    const router = useRouter()
    const StateCategory = useAppSelector(CategoriesState)
    const dispatch = useAppDispatch()

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
            width: '4rem'
        },
        {
            title: 'Name',
            selector: (row) => row.Name,
            sort: true,
        },
        {
            title: 'Action',
            align: 'center',
            width: '8rem',
            selector: (row) => {
                return <TableAction
                    onDelete={() => {
                        handleDeleteCategory(row.ID)
                    }}
                    onEdit={() => {
                        handleEditCategory(row.ID)
                    }}
                />
            }
        },
    ]

    const handleSort = (key: string, direction: 'asc' | 'desc') => {
        dispatch(FindAll())
    }

    const handleChangePerPage = (perPage: number) => {
        dispatch(SetPerPage(perPage))
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
                pageLength={StateCategory.Pagination.PageLength}
                perPage={StateCategory.Pagination.PerPage}
                page={1}
                totalPage={1}
                totalRows={1}
                onPerpageChange={handleChangePerPage}
                onPageChange={(page) => { }}
                onSort={handleSort}
                search={{
                    value: StateCategory.Query,
                    onSearch: (value: string) => {
                        dispatch(SetQuery(value))
                    },
                    placeholder: 'search category...'
                }}
            />
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