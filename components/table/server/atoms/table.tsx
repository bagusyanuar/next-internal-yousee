import React from 'react'
import styled from 'styled-components'

interface IProps {
    children: React.ReactNode
    scroll?: boolean
}

const Table: React.FC<IProps> = ({
    children,
    scroll = false
}) => {
    return (
        <Wrapper $scroll={scroll}>{children}</Wrapper>
    )
}

export default Table

const Wrapper = styled.table<{ $scroll: boolean }>`
    ${({ $scroll }) => $scroll ? '' : 'width: 100%;'}
    background: transparent;
`