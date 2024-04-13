'use client'

import React, { useId } from 'react'
import styled from 'styled-components'
import Label from '@/components/input/label'
import RequiredLabel from '@/components/input/label/label.required'
import { ColorScheme } from '@/components/color'
import { InputRadius } from '@/components/utils'

interface IProps {
    value: string
    validator: string
    rows?: number
    id?: string
    name?: string
    label?: React.ReactNode
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    className?: string
    placeholder?: string
    required?: boolean
    disabled?: boolean
}

const InputTextareaGroupValidator: React.FC<IProps> = ({
    value,
    validator,
    rows = 5,
    id,
    name,
    label,
    onChange = (e) => { },
    className = '',
    placeholder = '',
    required = false,
    disabled = false
}) => {
    const inputID = `input-field-${useId()}`
    return (
        <MainWrapper className={className}>
            {
                label ?
                    (
                        required ?
                            <RequiredLabel htmlFor={id || inputID}>{label}</RequiredLabel>
                            : <Label htmlFor={id || inputID}>{label}</Label>
                    )
                    : <></>
            }
            <Wrapper>
                <StyledInput
                    rows={rows}
                    id={id || inputID}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                />
            </Wrapper>
            {
                validator !== ''
                    ?
                    <StyledErrorText>{validator}</StyledErrorText>
                    :
                    <></>
            }
        </MainWrapper>
    )
}

export default InputTextareaGroupValidator

const StyledInput = styled.textarea`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    width: 100%;
    font-size: 0.8em;
    border-radius: ${InputRadius.small};
    color: ${ColorScheme.textDark};

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${ColorScheme.textLight};
    }
`

const StyledErrorText = styled.span`
    font-size: 0.7em;
    padding: 2px 2px;
    color: ${ColorScheme.dangerTint.tint20};
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${ColorScheme.textLight};
    border-radius: ${InputRadius.small};
    width: 100%;
    transition: all ease-in-out 200ms;
    
    &:focus-within {
        border-color: ${ColorScheme.textLightShades.shades20};
    }
`

const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`