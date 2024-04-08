import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'
import { FontSize } from '@/components/utils'

interface IProps {
    htmlFor?: string
    children?: React.ReactNode
    className?: string
}

const Label: React.FC<IProps> = ({
    htmlFor,
    children,
    className = ''
}) => {
    return (
        <Wrapper htmlFor={htmlFor} className={className}>
            {children}
        </Wrapper>
    )
}

export default Label

const Wrapper = styled.label`
    display: flex;
    font-size: ${FontSize.normal};
    color: ${ColorScheme.textDarkTint.tint20};
    margin-bottom:  0.25rem;
`