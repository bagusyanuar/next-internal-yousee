import { CardPadding, CardRadius, CardShadow } from '@/components/utils'
import React from 'react'
import styled, { keyframes } from 'styled-components'

interface IProps {
    onStream: boolean
    children?: React.ReactNode,
    className?: string
}

const CardStream: React.FC<IProps> = ({
    onStream,
    children,
    className = ''
}) => {
    return (
        <StyledCardStream className={`${className}`} $stream={onStream}>
            <div className='animate'></div>
            {children}
        </StyledCardStream>
    )
}

export default CardStream

const ShimmerAnimation = keyframes`
    from {background-position: 200% 0};
    to {background-position: -200% 0;}
`
const StyledCardStream = styled.div<{ $stream: boolean }>`
    background-color: white;
    padding: ${({ $stream }) => $stream ? '0 0' : CardPadding.small};
    border-radius: ${CardRadius.medium};
    width: 200px;
    height: 100px;
    box-shadow: ${CardShadow.small};

    .animate {
        width: 200px;
        height: 100px;
        border-radius: ${CardRadius.medium};
        animation: ${ShimmerAnimation} 2s linear infinite;
        background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.1) 25%, transparent 30%);
        background-size: 200% 100%;
    }
`