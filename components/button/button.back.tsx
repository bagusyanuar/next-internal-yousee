import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'

interface IProps {
    onClick: () => void
    className?: string
}

const ButtonBack: React.FC<IProps> = ({
    onClick,
    className = ''
}) => {
    return (
        <Wrapper className={className} onClick={onClick}>
            <i className='bx bx-arrow-back'></i>
        </Wrapper>
    )
}

export default ButtonBack

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        color: ${ColorScheme.textDark};
    }

    i {
        font-size: 1.25em;
        line-height: 0;
        color: ${ColorScheme.textDarkTint.tint20};
    }
`