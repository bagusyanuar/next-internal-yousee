import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Card } from '@/components/atoms/card'
import { ColorScheme } from '@/components/utils'

interface IProps {
    icon: string
    title: string
    total: number
    className?: string
}

const CardCategory: React.FC<IProps> = ({
    icon,
    title,
    total,
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            <IconWrapper>
                <Image src={icon} height={40} width={40} alt='category-image' />
            </IconWrapper>
            <InformationWrapper>
                <p className='title'>{title}</p>
                <p className='total'>{total}</p>
            </InformationWrapper>
        </Wrapper>
    )
}

export default CardCategory

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

const IconWrapper = styled(Card)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0;
    height: 60px;
    width: 60px;
    margin-right: 0.5rem;
    border-radius: 8px;

    img {
        height: 30px;
        width: 30px;
        object-fit: contain;
        object-position: center center;
    }
`

const InformationWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .title {
        font-size: 0.8em;
        color: ${ColorScheme.textLight};
    }

    .total {
        font-size: 1em;
        color: ${ColorScheme.textDark};
        font-weight: 500;
    }
`