'use client'

import React from 'react'
import THEAD from './atoms/thead'
import TR from './atoms/tr'
import TH from './atoms/th'
import type { TColumn, TSORT, HeaderSort, TSortDirectionOption } from './type'

export interface ITableHeaderProps<T> {
    columns: Array<TColumn<T>>
    columnSort: Array<HeaderSort>
    onColumnSort?: (key: string, direction: TSortDirectionOption) => void
    scroll?: boolean
}

const Header = <T,>({
    columns,
    columnSort,
    onColumnSort,
    scroll = false
}: ITableHeaderProps<T>) => {

    return (
        <THEAD>
            <TR>
                {
                    columns.map((v, k) => {
                        let sort: TSORT | undefined = undefined
                        if (v.sort) {
                            const title: string = v.title
                            const selectedHeader: HeaderSort | undefined = columnSort.find(e => e.key === title)
                            if (selectedHeader) {
                                sort = {
                                    key: selectedHeader.key,
                                    defaultDirection: selectedHeader.defaultDirection,
                                    onSort: (key: string, direction: TSortDirectionOption) => {
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
                            scroll={scroll}
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