import { ColorScheme } from '@/components/utils'
import React from 'react'
import styled from 'styled-components'

interface IProps {
    children: React.ReactNode
    className?: string
}
const TableRowData: React.FC<IProps> = ({
    children,
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    )
}

export default TableRowData

const Wrapper = styled.td`
    padding: 0.75rem 1rem;
    font-size: 0.8em;
    color: ${ColorScheme.textLightShades.shades20};
`