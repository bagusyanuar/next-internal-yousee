import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'

interface IProps {
    children?: React.ReactNode
    className?: string
    onClick?: () => void
}

const ButtonOutlineDanger: React.FC<IProps> = ({
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

export default ButtonOutlineDanger

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: ${ColorScheme.dangerTint.tint20};
    padding: 0.5rem 1rem;
    font-size: 0.8em;
    border-radius: 5px;
    border: 1px solid ${ColorScheme.dangerTint.tint20};
    transition: all ease-in-out 200ms;

    &:hover {
        color: whitesmoke;
        background-color: ${ColorScheme.danger};
        border: 1px solid ${ColorScheme.danger};
    }
`