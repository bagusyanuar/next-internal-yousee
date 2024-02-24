import React from 'react'
import styled from 'styled-components'
import { NavbarTitles } from '@/components/molecules/navbar'

import { useAppSelector } from '@/redux/hooks'
import {
    NavbarState,
} from '@/redux/navbar/slice'

interface IProps {
    className?: string
}
const Navbar: React.FC<IProps> = ({ className = '' }) => {
    const StateNavbar = useAppSelector(NavbarState)
    return (
        <Wrapper className={className}>
            <NavbarTitles title={StateNavbar.Title} />
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.div`
    width: 100%;
    padding-right: 1rem;
    padding-left: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`