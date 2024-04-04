import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import TABLE, { THEAD, TD, TH } from '@/components/table'
import TableLength from '@/components/table/table.length'
import TablePagination from '@/components/table/table.pagination'
import { LoaderDots } from '@/components/loader'
import {
    CategoriesState,
    SetPerPage,
    SetPage,
    SetQuery,
    SetSort
} from '@/redux/categories/slice'
import { getCategoriesData } from '@/redux/categories/action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const CategorySectionTable: React.FC = () => {
    const StateCategory = useAppSelector(CategoriesState)
    const dispatch = useAppDispatch()
    const [columnNameDirection, setColumnNameDirection] = useState<'asc' | 'desc'>('asc')

    const handleChangePerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const perPage: number = parseInt(e.currentTarget.value)
        dispatch(SetPerPage(perPage))
        dispatch(getCategoriesData())
    }

    const handleChangePage = (page: number) => {
        dispatch(SetPage(page))
        dispatch(getCategoriesData())
    }

    const handleSort = (key: string, direction: 'asc' | 'desc') => {
        setColumnNameDirection(direction)
        dispatch(SetSort({ Column: key, Direction: direction }))
        dispatch(getCategoriesData())
    }

    const initialPage = useCallback(() => {
        dispatch(getCategoriesData())
    }, [dispatch])

    useEffect(() => {
        initialPage()
        return () => { }
    }, [initialPage])


    return (
        <Wrapper>
            {
                StateCategory.LoadingData ?
                    <><LoaderDots /></> :
                    <>
                        <HeaderWrapper>
                            <TableLength
                                length={StateCategory.Pagination.PageLength}
                                value={StateCategory.Pagination.PerPage}
                                onChange={handleChangePerPage}
                            />
                        </HeaderWrapper>
                        <TABLE>
                            <THEAD>
                                <tr>
                                    <TH width='4rem' align='center'>No.</TH>
                                    <TH width='8rem' align='center'>Icon</TH>
                                    <TH sort={{
                                        key: 'name',
                                        defaultDirection: columnNameDirection,
                                        onSort: handleSort
                                    }}>Name</TH>
                                    <TH width='12rem' align='center'>Action</TH>
                                </tr>
                            </THEAD>
                            <tbody>
                                {
                                    StateCategory.Categories.map((v, k) => {
                                        return <tr key={k}>
                                            <TD align='center'>{(k + 1)}</TD>
                                            <TD>
                                                <IconWrapper>
                                                    {
                                                        v.Icon !== null ?
                                                            <Image src={v.Icon} width={15} height={15} alt='category-icon' priority />
                                                            : <>-</>
                                                    }
                                                </IconWrapper>
                                            </TD>
                                            <TD>{v.Name}</TD>
                                            <TD align='center'>-</TD>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </TABLE>
                        <TablePagination
                            page={StateCategory.Pagination.Page}
                            totalPage={StateCategory.Pagination.PerPage}
                            totalRows={StateCategory.Pagination.Rows}
                            onPageChange={handleChangePage}
                        />
                    </>
            }

        </Wrapper>
    )
}

export default CategorySectionTable

const Wrapper = styled.div`
    width: 100%;
    margin-top: 1rem;
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
`

const IconWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    img {
        width: 50;
        height: auto;
    }
`