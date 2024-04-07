'use client'

import React from 'react'
import styled from 'styled-components'
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
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const Datatable: React.FC = () => {
    const StateCategory = useAppSelector(CategoriesState)
    const dispatch = useAppDispatch()

    const data: Array<Category> = [
        {
            ID: 1,
            Name: 'Baliho',
            Icon: null
        },
        {
            ID: 2,
            Name: 'Billboard',
            Icon: null
        },
    ]

    const handleDeleteCategory = (categoryID: number) => {
        dispatch(SetModalConfirmation(true))
    }


    return (
        <Wrapper>
            <TableFilter />
            <Table>
                <TableHeader />
                <TableBody
                    data={data}
                    onDelete={handleDeleteCategory}
                />
            </Table>
            <TablePagination />
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