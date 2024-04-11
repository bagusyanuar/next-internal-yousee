'use client'

import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'

interface IProps {
    onEdit: () => void
    onDelete: () => void
}

const TableAction: React.FC<IProps> = ({
    onEdit,
    onDelete
}) => {
    const handleEdit = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        onEdit()
    }

    const handleDelete = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        onDelete()
    }

    return (
        <Wrapper>
            <ButtonEdit href='#' onClick={handleEdit}>
                <i className='bx bx-edit'></i>
            </ButtonEdit>
            <ButtonDelete href='#' onClick={handleDelete}>
                <i className='bx bx-trash'></i>
            </ButtonDelete>
        </Wrapper>
    )
}

export default TableAction

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
`

const ButtonEdit = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.35rem 0.35rem;
    border-radius: 4px;
    color: whitesmoke;
    background-color: ${ColorScheme.warningTint.tint20};
    transition: all ease-in-out 200ms;

    &:hover {
        background-color: ${ColorScheme.warning};
    }
`

const ButtonDelete = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.35rem 0.35rem;
    border-radius: 4px;
    color: whitesmoke;
    background-color: ${ColorScheme.dangerTint.tint20};
    transition: all ease-in-out 200ms;

    &:hover {
        background-color: ${ColorScheme.danger};
    }
`