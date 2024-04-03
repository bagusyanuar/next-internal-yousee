'use client'

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'
import BrandImage from '@/public/assets/static/brand.png'

const LoginPage = () => {
    return (
        <Wrapper>
            <Image src={BrandImage} alt='brand-image' priority />
        </Wrapper>
    )
}

export default LoginPage

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${ColorScheme.primaryTint.tint80};
    display: flex;
    align-items: center;
    justify-content: center;
`