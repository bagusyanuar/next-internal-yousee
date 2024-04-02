import { ButtonPadding, ColorScheme } from '@/components/utils'
import React from 'react'
import styled from 'styled-components'

interface IProps { onClick: () => void, className?: string }

const ButtonAdd: React.FC<IProps> = ({ onClick, className = '' }) => {
    return (
        <StyledButton onClick={() => { onClick() }}>
            <i className='bx bx-plus'></i>
            <span>Add</span>
        </StyledButton>
    )
}

export default ButtonAdd

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ColorScheme.primary};
    color: whitesmoke;
    padding: ${ButtonPadding.small};
    font-size: 0.8em;
    border-radius: 5px;
    transition: all ease-in-out 200ms;

    &:hover {
        background-color: ${ColorScheme.primaryShades.shade20};
    }

    i {
        margin-right: 0.5rem;
    }
`