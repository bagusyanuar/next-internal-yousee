import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'

interface IProps {
    id: string
    children?: React.ReactNode
    className?: string
}
const LabelRequired: React.FC<IProps> = ({
    id,
    children,
    className = ''
}) => {
    return (
        <Wrapper htmlFor={id} className={className}>
            {children}
            <span className='mark'>*</span>
        </Wrapper>
    )
}

export default LabelRequired

const Wrapper = styled.label`
    display: flex;
    font-size: 0.8em;
    color: ${ColorScheme.textDarkTint.tint20};

    .mark {
        margin-left: 0.1rem;
        color: ${ColorScheme.danger};
    }
`