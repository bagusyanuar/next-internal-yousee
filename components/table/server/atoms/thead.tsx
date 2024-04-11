import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'

interface IProps {
    children: React.ReactNode
}

const THEAD: React.FC<IProps> = ({
    children
}) => {
    return (
        <StyledTHEAD>
            {children}
        </StyledTHEAD>
    )
}

export default THEAD

const StyledTHEAD = styled.thead`
    border-bottom: 1px solid ${ColorScheme.textDarkTint.tint80};
    border-top: 1px solid ${ColorScheme.textDarkTint.tint80};
  `