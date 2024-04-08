'use client'

import React from 'react'
import Image from 'next/image'

import styled from 'styled-components'
import { TBODY, TR, TD } from '@/components/table'
import TableAction from '@/components/table/table.action'
import ImageBaliho from '@/public/assets/static/baliho.png'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

import type { Category } from '@/model/category'

interface IProps {
    data: Array<Category>,
    onDelete: (categoryID: number) => void
    onEdit: (categoryID: number) => void
}
const Body: React.FC<IProps> = ({
    data,
    onDelete,
    onEdit
}) => {
    

    const handleDelete = (categoryID: number) => {
        onDelete(categoryID)
    }

    const handleEdit = (categoryID: number) => {
        onEdit(categoryID)
    }
    return (
        <TBODY>
            {
                data.map((category, index) => {
                    return <TR key={index}>
                        <TD align='center'>{(index + 1)}</TD>
                        <TD>
                            <IconWrapper>
                                <Image src={ImageBaliho} alt='category-icon' priority />
                            </IconWrapper>
                        </TD>
                        <TD>{category.Name}</TD>
                        <TD align='center'>
                            <TableAction
                                onEdit={() => {
                                    handleEdit(category.ID)
                                }}
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

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
        width: auto;
        height: 30px;
    }
`