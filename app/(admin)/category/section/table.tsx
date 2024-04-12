'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
import TableServer, { TColumn, TableAction } from '@/components/table/server'
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
            width: '5rem'
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

    const handleSearch = () => {
        console.log('fetch...');
        dispatch(FindAll())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceSearch = useCallback(debounce(handleSearch, 1500),[])
    

    return (
        <Wrapper>
            <TableServer
                onProcess={StateCategory.LoadingData}
                columns={Columns}
                data={StateCategory.Categories}
                pageLength={StateCategory.Pagination.PageLength}
                perPage={StateCategory.Pagination.PerPage}
                page={StateCategory.Pagination.Page}
                totalPage={StateCategory.Pagination.TotalPage}
                totalRows={StateCategory.Pagination.Rows}
                onPerpageChange={handleChangePerPage}
                onPageChange={(page) => { }}
                onSort={handleSort}
                search={{
                    value: StateCategory.Query,
                    onSearch: (value: string) => {
                        dispatch(SetQuery(value))
                        debounceSearch()
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