import { ColorScheme } from '@/components/utils'
import React from 'react'
import styled from 'styled-components'

interface IProps { text: string, className?: string }
const NavbarTitle: React.FC<IProps> = ({text, className = ''}) => {
    return (
        <StyledNavbarTitle className={className}>
            {text}
        </StyledNavbarTitle>
    )
}

export default NavbarTitle

const StyledNavbarTitle = styled.h1`
    font-size: 1.75em;
    font-weight: 500;
    color: ${ColorScheme.textDark};
    margin-bottom: 0;
    line-height: 1;
`