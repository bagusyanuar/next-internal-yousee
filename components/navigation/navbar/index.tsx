import React from 'react'
import styled from 'styled-components'
import { usePathname } from 'next/navigation'
import NavbarTitle from './navbar.title'
import NavbarProfile from './profile'
import { TNavbarTitle, useNavbarTitle } from './hooks'

const Navbar: React.FC = () => {
    const pathName = usePathname()
    const navbarTitle: TNavbarTitle = useNavbarTitle(pathName)
    return (
        <Wrapper>
            <NavbarTitle title={navbarTitle.Title} subTitle={navbarTitle.SubTitle} />
            <NavbarProfile />
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.div`
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`