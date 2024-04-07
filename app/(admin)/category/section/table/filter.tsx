'use client'

import React from 'react'
import styled from 'styled-components'
import TableLength from '@/components/table/table.length'
import TableSearch from '@/components/table/table.search'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
    CategoriesState,
    SetPerPage,
    SetQuery
} from '@/redux/categories/slice'
import { getCategoriesData } from '@/redux/categories/action'

const Filter: React.FC = () => {
    const StateCategory = useAppSelector(CategoriesState)
    const dispatch = useAppDispatch()

    const handleChangePerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const perPage: number = parseInt(e.currentTarget.value)
        dispatch(SetPerPage(perPage))
        dispatch(getCategoriesData())
    }

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query: string = e.currentTarget.value
        dispatch(SetQuery(query))
    }
    
    return (
        <Wrapper>
            <TableLength
                length={StateCategory.Pagination.PageLength}
                value={StateCategory.Pagination.PerPage}
                onChange={handleChangePerPage}
            />
            <Search 
                value={StateCategory.Query}
                placeholder='search category...'
                onChange={handleChangeSearch}
            />
        </Wrapper>
    )
}

export default Filter

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
`

const Search = styled(TableSearch)`
    width: 200px;
`