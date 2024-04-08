import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'
import { FontSize, ButtonPadding } from '@/components/utils'

interface IProps {
    children?: React.ReactNode
    className?: string
    onClick?: () => void
}

const Button: React.FC<IProps> = ({
    children,
    className = '',
    onClick = () => { }
}) => {
    return (
        <StyledButton className={className} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default Button

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ColorScheme.primary};
    color: whitesmoke;
    padding: ${ButtonPadding.normal};
    font-size: ${FontSize.normal};
    border: 1px solid ${ColorScheme.primary};
    border-radius: 5px;
    transition: all ease-in-out 200ms;

    &:hover {
        background-color: ${ColorScheme.primaryShades.shade20};
    }
`