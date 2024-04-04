'use client'

import React from 'react'
import Image from 'next/image'
import { ThreeDots } from 'react-loader-spinner'
import styled from 'styled-components'
import BrandImage from '@/public/assets/static/brand.png'

interface IProps {
    height?: string
    className?: string
}
const LoaderDots: React.FC<IProps> = ({
    height = '20rem',
    className = ''
}) => {
    return (
        <Wrapper className={className} $height={height}>
            <Image src={BrandImage} alt='img-loader' priority />
            <ThreeDots
                color='#3fa6c3'
                height={20}
                width={30}
                radius={4}
            />
        </Wrapper>
    )
}

export default LoaderDots

const Wrapper = styled.div<{ $height: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${({ $height }) => $height};

    img {
        height: 60px;
        width: auto;
    }
`