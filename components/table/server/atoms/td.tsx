import { ColorScheme } from '@/components/color'
import React from 'react'
import styled from 'styled-components'

interface IProps {
    children: React.ReactNode
    align?: 'left' | 'center' | 'right'
}

const TD: React.FC<IProps> = ({
    children,
    align = 'left'
}) => {
    return (
        <StyledTD>
            <StyledTDContent $align={align}>
                {children}
            </StyledTDContent>
        </StyledTD>
    )
}

export default TD

const StyledTD = styled.td`
  font-size: 0.8em;
  color: ${ColorScheme.textDark};
  border-bottom: 1px solid ${ColorScheme.textDarkTint.tint80};
`
type TStyledTDContentProps = {
    $align?: 'left' | 'center' | 'right'
}

const StyledTDContent = styled.div<TStyledTDContentProps>`
  width: 100%;
  text-align: ${({ $align }) => $align ? $align : 'left'};
  padding: 0.5rem 0.75rem;
`