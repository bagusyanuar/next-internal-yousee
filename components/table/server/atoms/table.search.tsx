'use client'

import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'

interface IProps {
    value: string
    id?: string
    name?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    placeholder?: string
}

const TableSearch: React.FC<IProps> = ({
    value,
    id,
    name,
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => { },
    className = '',
    placeholder = 'search...'
}) => {
    return (
        <Wrapper className={className}>
            <StyledIcon className='bx bx-search' />
            <StyledInput
                type='text'
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </Wrapper>
    )
}

export default TableSearch

const StyledInput = styled.input`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 0.75rem;
    padding-left: 0.5rem;
    width: 100%;
    font-size: 0.8em;
    border-radius: 5px;
    color: ${ColorScheme.textDark};

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${ColorScheme.textLight};
    }
`

const StyledIcon = styled.i`
    background-color: transparent;
    margin-left: 0.5rem;
    color: ${ColorScheme.textLight};
    transition: all ease-in-out 200ms;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${ColorScheme.textLight};
    border-radius: 5px;
    width: 100%;
    transition: all ease-in-out 200ms;
    
    &:focus-within {
        border-color: ${ColorScheme.textLightShades.shades20};

        ${StyledIcon} {
            color: ${ColorScheme.textDark};
        }
    }
`