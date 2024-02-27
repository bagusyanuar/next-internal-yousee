import { ColorScheme } from '@/components/utils'
import React from 'react'
import styled from 'styled-components'

interface IProps {
    children: React.ReactNode
    className?: string
}
const TR: React.FC<IProps> = ({ children, className = '' }) => {
    return (
        <StyledTR className={className}>
            {children}
        </StyledTR>
    )
}

export default TR

const StyledTR = styled.tr`
    width: 100%;
    border-bottom: 1px solid ${ColorScheme.textDarkTint.tint80};
`