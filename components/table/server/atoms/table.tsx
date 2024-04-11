import React from 'react'
import styled from 'styled-components'

interface IProps {
    children: React.ReactNode
}

const Table: React.FC<IProps> = ({
    children
}) => {
    return (
        <Wrapper>{children}</Wrapper>
    )
}

export default Table

const Wrapper = styled.table`
    width: 100%;
    background: transparent;
    /* max-width: fit-content; */
    overflow-x: auto;
    white-space: nowrap;
`