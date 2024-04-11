'use client'

import React from 'react'
import styled from 'styled-components'
import TableLength from './atoms/table.length'
import TableSearch from './atoms/table.search'

interface IProps {
    length: Array<number>
    perPage: number
    onPerpageChange?: (perPage: number) => void
}

const Filter: React.FC<IProps> = ({
    length,
    perPage,
    onPerpageChange
}) => {
    const handleChangePerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const perPage: number = parseInt(e.currentTarget.value)
        if (onPerpageChange) {
            onPerpageChange(perPage)
        }
    }

    return (
        <Wrapper>
            <TableLength
                length={length}
                value={perPage}
                onChange={handleChangePerPage}
            />
            {/* <Search 
                value={StateCategory.Query}
                placeholder='search category...'
                onChange={handleChangeSearch}
            /> */}
        </Wrapper>
    )
}

export default Filter

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
`