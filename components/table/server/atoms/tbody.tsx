import React from 'react'
import styled from 'styled-components'

interface IProps {
    children: React.ReactNode
}

const TBODY: React.FC<IProps> = ({
    children
}) => {
    return (
        <StyledTBODY>
            {children}
        </StyledTBODY>
    )
}

export default TBODY

const StyledTBODY = styled.tbody`
    background-color: inherit;
    width: 100%;
`