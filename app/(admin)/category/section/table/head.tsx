'use client'

import React, { useState } from 'react'
import { THEAD, TR, TH } from '@/components/table'


const Head: React.FC = () => {
    const [columnNameDirection, setColumnNameDirection] = useState<'asc' | 'desc'>('asc')

    const handleSort = (key: string, direction: 'asc' | 'desc') => {
        setColumnNameDirection(direction)
    }
    
    return (
        <THEAD>
            <TR>
                <TH width='4rem' align='center'>#</TH>
                <TH width='8rem' align='center'>Icon</TH>
                <TH sort={{
                    key: 'name',
                    defaultDirection: columnNameDirection,
                    onSort: handleSort
                }}>Name</TH>
                <TH width='10rem' align='center'>Action</TH>
            </TR>
        </THEAD>
    )
}

export default Head