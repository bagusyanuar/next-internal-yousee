'use client'

import React from 'react'
import { THEAD, TR, TH } from './index'

export type THeader<T> = {
    title: string,
}

interface IProps {
    columns: Array<THeader<any>>
}

const TableHeader: React.FC<IProps> = ({
    columns
}) => {
    return (
        <THEAD>
            <TR>
                {
                    columns.map((v, k) => {
                        return <TH
                            key={k}
                            sort={{
                                defaultDirection: 'asc',
                                key: v.title,
                                onSort: (key, direction) => {
                                    console.log(v.title);
                                }
                            }}
                        >
                            {v.title}
                        </TH>
                    })
                }
            </TR>
        </THEAD>
    )
}

export default TableHeader