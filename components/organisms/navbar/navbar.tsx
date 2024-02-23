import React from 'react'
import styled from 'styled-components'

interface IProps { className?: string }
const Navbar: React.FC<IProps> = ({ className = ''}) => {
    return (
        <Wrapper></Wrapper>
    )
}

export default Navbar

const Wrapper = styled.div`
    width: 100%;
    padding: 1rem 4rem;
`