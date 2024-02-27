import { ColorScheme } from '@/components/utils'
import React from 'react'
import styled from 'styled-components'

interface IProps { text: string, className?: string }
const NavbarSubTitle: React.FC<IProps> = ({ text, className = '' }) => {
    return (
        <StyledNavbarSubTitle className={className}>
            {text}
        </StyledNavbarSubTitle>
    )
}

export default NavbarSubTitle

const StyledNavbarSubTitle = styled.p`
    font-size: 0.8em;
    color: ${ColorScheme.textLightShades.shades20};
    margin-bottom: 0;
    line-height: 1;
`