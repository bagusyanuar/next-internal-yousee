import React from 'react'
import styled from 'styled-components'
import { Card } from '@/components/atoms/card'
import { CardPadding, CardRadius, ColorScheme } from '@/components/utils'

interface IProps {
    title: string
    total: number
    icon: string
    className?: string
}
const CardInformation: React.FC<IProps> = ({
    title,
    total,
    icon,
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            <IconWrapper>
                <i className={icon}></i>
            </IconWrapper>
            <InformationWrapper>
                <p className='title'>{title}</p>
                <p className='total'>{total}</p>
            </InformationWrapper>
        </Wrapper>
    )
}

export default CardInformation

const Wrapper = styled(Card)`
    display: flex;
    align-items: center;
    padding: ${CardPadding.medium};
    cursor: pointer;
    width: 100%;
`

const IconWrapper = styled.div`
    border-radius: ${CardRadius.medium};
    width: 60px;
    height: 60px;
    background-color: ${ColorScheme.primary};
    display: flex;
    align-items: center;
    justify-content: center;

    i {
        color: white;
        font-size: 1.5em;
    }
`

const InformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: end;
    align-items: end;
    .title {
        color: ${ColorScheme.textLight};
        font-size: 0.8em;
    }

    .total {
        color: ${ColorScheme.textDark};
        font-size: 1.5em;
        font-weight: 600;
    }
`