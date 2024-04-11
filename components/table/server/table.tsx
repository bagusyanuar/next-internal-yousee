'use client'

import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import TABLE from './atoms/table'
import HEADER from './header'
import BODY from './body'
import LoaderDots from '@/components/loader/loader.dots'
import type { TColumn, TSORT, HeaderSort } from './type'

interface IProps<T> {
    columns: Array<TColumn<T>>
    data: Array<T>
    onProcess: boolean
    onSort?: (key: string, direction: 'asc' | 'desc') => void
    loadingComponent?: React.ReactNode
}


const Table = <T,>({
    columns,
    data,
    onProcess,
    onSort,
    loadingComponent = <LoaderDots height='24rem' />
}: IProps<T>) => {

    const [columnSort, setColumnSort] = useState<Array<HeaderSort>>([])

    const initState = useCallback(() => {
        let cSort: Array<HeaderSort> = []
        columns.forEach((v, k) => {
            if (v.sort) {
                cSort.push({
                    key: v.title,
                    defaultDirection: 'asc',
                })
            }
        })
        setColumnSort(cSort)
    }, [columns])

    useEffect(() => {
        initState()
        return () => { }
    }, [initState])

    const handleSort = (key: string, direction: 'asc' | 'desc') => {
        let tmpHeaderSort: Array<HeaderSort> = [...columnSort]
        const idx: number = tmpHeaderSort.findIndex((e) => e.key === key)
        console.log(tmpHeaderSort[idx]);
        tmpHeaderSort[idx].defaultDirection = direction
        setColumnSort(tmpHeaderSort)
        if (onSort) {
            console.log(columnSort);
            onSort(key, direction)
        }
    }
    return (
        <Wrapper>
            {
                onProcess ?
                    loadingComponent
                    : <TABLE>
                        <HEADER
                            columns={columns}
                            columnSort={columnSort}
                            onColumnSort={handleSort}
                        />
                        <BODY columns={columns} data={data} />
                        {/* <THEAD>
                            <TR>
                                <TH>#</TH>
                                <TH>Name</TH>
                                <TH sort={{
                                    key: 'Action',
                                    defaultDirection: 'asc',
                                    onSort: (k, d) => {
                                        
                                    },

                                }}>Action</TH>
                            </TR>
                        </THEAD> */}
                    </TABLE>
            }
        </Wrapper>
    )
}

export default Table

const Wrapper = styled.div`
    width: 100%;

`