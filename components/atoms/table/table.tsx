import React from 'react'
import styled from 'styled-components'

interface IProps {
    children: React.ReactNode
    className?: string
}
const Table: React.FC<IProps> = ({
    children,
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    )
}

export default Table

const Wrapper = styled.table`
    width: 100%;
    background: transparent;
`