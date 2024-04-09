'use client'

import React from 'react'
import THEAD from './atoms/thead'
import TR from './atoms/tr'
import TH from './atoms/th'
import type { TColumn } from './table'

interface IProps {
    columns: Array<TColumn<any>>
}

const Header: React.FC<IProps> = ({
    columns
}) => {
    return (
        <THEAD>
            {
                columns.map((v, k) => {
                    return <TR key={k}>
                        {v.title}
                    </TR>
                })
            }
        </THEAD>
    )
}

export default Header