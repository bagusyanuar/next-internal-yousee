import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

interface IProps { image: string, className?: string }
const SidebarBrand: React.FC<IProps> = ({ image, className = '' }) => {
    return (
        <Wrapper className={className}>
            <Image src={image} width={150} height={100} alt='brand-image' priority />
        </Wrapper>
    )
}

export default SidebarBrand

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;
`