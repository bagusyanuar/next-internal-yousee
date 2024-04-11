'use client'

import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import TABLE from './atoms/table'
import TableLength from './atoms/table.length'
import TableSearch from './atoms/table.search'
import TablePagination from './atoms/table.pagination'
import HEADER from './header'
import BODY from './body'
import LoaderDots from '@/components/loader/loader.dots'
import type { TColumn, HeaderSort, TSortDirectionOption, TSearch } from './type'

interface IProps<T> {
    columns: Array<TColumn<T>>
    data: Array<T>
    pageLength: Array<number>
    perPage: number
    page: number
    totalPage: number
    totalRows: number
    onPageChange: (page: number) => void
    onPerpageChange: (perPage: number) => void
    search?: TSearch
    onProcess?: boolean
    onSort?: (key: string, direction: TSortDirectionOption) => void
    loadingComponent?: React.ReactNode
}


const Table = <T,>({
    columns,
    data,
    pageLength,
    perPage,
    page,
    totalPage,
    totalRows,
    onPageChange,
    onPerpageChange,
    onProcess = false,
    search,
    onSort,
    loadingComponent = <LoaderDots height='24rem' />
}: IProps<T>) => {
    const [columnSort, setColumnSort] = useState<Array<HeaderSort>>([])

    const initState = useCallback(() => {
        let cSort: Array<HeaderSort> = []
        columns.forEach((v) => {
            if (v.sort) {
                cSort.push({
                    key: v.title,
                    defaultDirection: 'desc',
                })
            }
        })
        setColumnSort(cSort)
    }, [])

    useEffect(() => {
        initState()
        return () => { }
    }, [initState])

    const onColumnSort = (key: string, direction: TSortDirectionOption) => {
        let headerSort: Array<HeaderSort> = [...columnSort]
        const index: number = headerSort.findIndex((e) => e.key === key)
        headerSort[index].defaultDirection = direction
        setColumnSort(headerSort)
        if (onSort) {
            onSort(key, direction)
        }
    }

    const handleChangePerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const perPage: number = parseInt(e.currentTarget.value)
        if (onPerpageChange) {
            onPerpageChange(perPage)
        }
    }

    return (
        <Wrapper>
            {
                onProcess ?
                    loadingComponent
                    : <>
                        <ExtensionWrapper>
                            <TableLength
                                length={pageLength}
                                value={perPage}
                                onChange={handleChangePerPage}
                            />
                            {
                                search ?
                                    <Search
                                        value={search.value}
                                        onChange={(e) => {
                                            const value: string = e.currentTarget.value
                                            search.onSearch(value)
                                        }}
                                        placeholder={search.placeholder}
                                    />
                                    : <></>
                            }

                        </ExtensionWrapper>
                        <TABLE>
                            <HEADER
                                columns={columns}
                                columnSort={columnSort}
                                onColumnSort={onColumnSort}
                            />
                            <BODY columns={columns} data={data} />
                        </TABLE>
                        <TablePagination
                            page={page}
                            totalPage={totalPage}
                            totalRows={totalRows}
                            onPageChange={onPageChange}
                        />
                    </>
            }
        </Wrapper>
    )
}

export default Table

const Wrapper = styled.div`
    width: 100%;
`
const ExtensionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
`

const Search = styled(TableSearch)`
    width: 200px;
`