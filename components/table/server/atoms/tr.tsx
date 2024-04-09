import React from 'react'
import styled from 'styled-components'

interface IProps {
    children: React.ReactNode
}

const TR: React.FC<IProps> = ({
    children
}) => {
    return (
        <StyledTR>
            {children}
        </StyledTR>
    )
}

export default TR

const StyledTR = styled.tr`
    background-color: transparent;
    width: 100%;
`