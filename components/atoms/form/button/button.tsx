import React from 'react'
import styled from 'styled-components'
import { ButtonPadding, ColorScheme } from '@/components/utils'

type TTheme = 'primary' | 'accent'

interface IProps {
    children?: React.ReactNode
    theme?: TTheme
    className?: string
    onClick?: () => void
}
const Button: React.FC<IProps> = ({
    children,
    theme = 'primary',
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
    background-color: ${ColorScheme.primary};
    color: whitesmoke;
    padding: ${ButtonPadding.medium};
    font-size: 0.8em;
    border-radius: 5px;
    transition: all ease-in-out 200ms;

    &:hover {
        background-color: ${ColorScheme.primaryShades.shade20};
    }

`