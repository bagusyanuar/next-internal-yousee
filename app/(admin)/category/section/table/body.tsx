'use client'

import React from 'react'
import { TBODY, TR, TD } from '@/components/table'
import TableAction from '@/components/table/table.action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

import type { Category } from '@/model/category'

interface IProps {
    data: Array<Category>,
    onDelete: (categoryID: number) => void
}
const Body: React.FC<IProps> = ({
    data,
    onDelete
}) => {

    const handleDelete = (categoryID: number) => {
        onDelete(categoryID)
    }
    return (
        <TBODY>
            {
                data.map((category, index) => {
                    return <TR key={index}>
                        <TD align='center'>{(index + 1)}</TD>
                        <TD>
                            -
                        </TD>
                        <TD>{category.Name}</TD>
                        <TD align='center'>
                            <TableAction
                                onEdit={() => { }}
                                onDelete={() => {
                                    handleDelete(category.ID)
                                }}
                            />
                        </TD>
                    </TR>
                })
            }
        </TBODY>
    )
}

export default Body