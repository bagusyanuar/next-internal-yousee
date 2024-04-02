import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'
import { FontSize } from '@/components/utils'

interface IProps {
    title: string
    subTitle: string
}

const NavbarTitle: React.FC<IProps> = ({
    title,
    subTitle
}) => {
    return (
        <Wrapper>
            <StyledTitle>{title}</StyledTitle>
            <StyledNavbarSubTitle>{subTitle}</StyledNavbarSubTitle>
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
    font-size: ${FontSize.large};
    font-weight: 500;
    color: ${ColorScheme.textDark};
    margin-bottom: 0.25rem;
`

const StyledNavbarSubTitle = styled.p`
    font-size: ${FontSize.normal};
    color: ${ColorScheme.textLightShades.shades20};
    margin-bottom: 0;
    line-height: 1;
`