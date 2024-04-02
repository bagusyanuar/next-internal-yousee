import React from 'react'
import styled from 'styled-components'
import NavbarTitle from './navbar.title'

interface IProps {
    title: string
}
const Navbar: React.FC<IProps> = ({
    title
}) => {
    return (
        <Wrapper>
            <NavbarTitle title={title} />
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