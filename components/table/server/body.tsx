'use client'

import React from 'react'
import TBODY from './atoms/tbody'
import TR from './atoms/tr'
import TD from './atoms/td'
import type { TColumn } from './type'

export interface ITableBodyProps<T> {
    columns: Array<TColumn<T>>
    data: Array<T>
}

const Body = <T,>({
    columns,
    data
}: ITableBodyProps<T>) => {
    return (
        <TBODY>
            {
                data.map((v, k) => {
                    return <TR key={k}>
                        {
                            columns.map((vColumn, kColumn) => {
                                return <TD
                                    key={kColumn}
                                    align={vColumn.align}
                                >
                                    {vColumn.selector ? vColumn.selector(v, k) : <></>}
                                </TD>
                            })
                        }
                    </TR>
                })
            }
        </TBODY>
    )
}

export default Body