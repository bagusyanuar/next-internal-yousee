import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'

interface IProps {
    value: string
    checked: boolean
    text: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
}

const Checkbox: React.FC<IProps> = ({
    value,
    checked,
    text,
    onChange = (e) => { },
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            <StyledInput
                type='checkbox'
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <StyledLabel>{text}</StyledLabel>
        </Wrapper>
    )
}

export default Checkbox

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const StyledInput = styled.input`
    margin-right: 0.5rem;
    appearance: none;
    background-color: white;
    width: 1rem;
    height: 1rem;
    border: 1px solid ${ColorScheme.textLight};
    border-radius: 3px;
    display: grid;
    place-content: center;
    cursor: pointer;

    &::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em ${ColorScheme.primary};
        background-color: CanvasText;
        transform-origin: center center;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        border-color: ${ColorScheme.textDark};
    }
`

const StyledLabel = styled.label`
    font-size: 0.8em;
    color: ${ColorScheme.textDark};
`