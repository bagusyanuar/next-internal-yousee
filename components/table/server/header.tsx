'use client'

import React from 'react'
import THEAD from './atoms/thead'
import TR from './atoms/tr'
import TH from './atoms/th'
import type { TColumn, TSORT, HeaderSort } from './type'

export interface ITableHeaderProps<T> {
    columns: Array<TColumn<T>>
    columnSort: Array<HeaderSort>
    onColumnSort?: (key: string, direction: 'asc' | 'desc') => void
}

const Header = <T,>({
    columns,
    columnSort,
    onColumnSort
}: ITableHeaderProps<T>) => {

    return (
        <THEAD>
            <TR>
                {
                    columns.map((v, k) => {
                        let sort: TSORT | undefined = undefined
                        if (v.sort) {
                            const title: string = v.title
                            const c: HeaderSort | undefined = columnSort.find(e => e.key === title)
                            if (c) {
                                sort = {
                                    key: c.key,
                                    defaultDirection: c.defaultDirection,
                                    onSort: (key: string, direction: 'asc' | 'desc') => {
                                        if (onColumnSort) {
                                            onColumnSort(key, direction)
                                        }
                                    }
                                }
                            }
                        }
                        return <TH
                            key={k}
                            align={v.align}
                            width={v.width}
                            sort={sort}
                        >
                            {v.title}
                        </TH>
                    })
                }
            </TR>
        </THEAD >
    )
}

export default Header