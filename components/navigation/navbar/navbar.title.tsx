import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'

interface IProps {
    title: string
}

const NavbarTitle: React.FC<IProps> = ({
    title
}) => {
    return (
        <Wrapper>
            <StyledTitle>{title}</StyledTitle>
        </Wrapper>
    )
}

export default NavbarTitle

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`

const StyledTitle = styled.p`
    font-size: 1.75em;
    font-weight: 500;
    color: ${ColorScheme.textDark};
    margin-bottom: 0.5rem;
`