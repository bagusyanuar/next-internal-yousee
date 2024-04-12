'use client'

import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'
import { FontSize, ButtonPadding } from '@/components/utils'

interface IProps {
    className?: string
    onClick?: () => void
}

const ButtonAdd: React.FC<IProps> = ({
    className = '',
    onClick = () => { }
}) => {
    return (
        <StyledButton className={className} onClick={onClick}>
            <ButtonContent>
                <i className='bx bx-plus'></i>
                <span>ADD</span>
            </ButtonContent>
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
    padding: ${ButtonPadding.normal};
    font-size: ${FontSize.normal};
    border: 1px solid ${ColorScheme.primary};
    border-radius: 5px;
    transition: all ease-in-out 200ms;

    &:hover {
        background-color: ${ColorScheme.primaryShades.shade20};
    }
`

const ButtonContent = styled.div`
    display: flex;
    align-items: center;

    i {
        margin-right: 0.25rem;
        line-height: 0;
    }
`