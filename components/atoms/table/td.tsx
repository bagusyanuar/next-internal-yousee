import { ColorScheme } from '@/components/utils'
import React from 'react'
import styled from 'styled-components'

interface IProps {
    children: React.ReactNode
    className?: string
}
const TD: React.FC<IProps> = ({ children, className = '' }) => {
    return (
        <StyledTD className={className}>
            {children}
        </StyledTD>
    )
}

export default TD

const StyledTD = styled.td`
    padding: 1rem 1rem;
    font-size: 0.8em;
    color: ${ColorScheme.textLightShades.shades20};
`