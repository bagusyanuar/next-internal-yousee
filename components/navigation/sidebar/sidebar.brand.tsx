import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import BrandImage from '@/public/assets/static/brand.png'

const SidebarBrand = () => {
    return (
        <Wrapper>
            <Image
                src={BrandImage}
                alt='brand-image'
                priority />
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

    img {
        width: 150px;
    }
`