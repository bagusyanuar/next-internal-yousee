import React from 'react'
import styled from 'styled-components'
import { NavbarTitle } from '@/components/atoms/navbar'

interface IProps {
    title: string
    subTitle?: string
    withBackButton?: boolean
    className?: string
}

const NavbarTitles: React.FC<IProps> = ({
    title,
    subTitle,
    withBackButton = false,
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            <NavbarTitle text={title} />
        </Wrapper>
    )
}

export default NavbarTitles

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`