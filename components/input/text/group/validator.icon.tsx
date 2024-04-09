'use client'

import React, { useId } from 'react'
import styled from 'styled-components'
import Label from '@/components/input/label'
import RequiredLabel from '@/components/input/label/label.required'
import { ColorScheme } from '@/components/color'
import { FontSize, InputRadius } from '@/components/utils'

interface IProps {
    value: string
    icon: string
    validator: string
    id?: string
    name?: string
    label?: React.ReactNode
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    placeholder?: string
    required?: boolean
    disabled?: boolean
}

const InputTextGroupValidatorIcon: React.FC<IProps> = ({
    value,
    icon,
    validator,
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
        <Wrapper className={className}>
            {
                label ?
                    (
                        required ?
                            <RequiredLabel htmlFor={id || inputID}>{label}</RequiredLabel>
                            : <Label htmlFor={id || inputID}>{label}</Label>
                    )
                    : <></>
            }
            <InputWrapper>
                <StyledIcon className={icon} />
                <StyledInput
                    type='text'
                    id={id || inputID}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                />
            </InputWrapper>
            {
                validator !== ''
                    ?
                    <StyledErrorText>{validator}</StyledErrorText>
                    :
                    <></>
            }
        </Wrapper>
    )
}

export default InputTextGroupValidatorIcon


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const StyledIcon = styled.i`
    background-color: transparent;
    margin-left: 0.75rem;
    color: ${ColorScheme.textLight};
    transition: all ease-in-out 200ms;
`



const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${ColorScheme.textLight};
    border-radius: ${InputRadius.small};
    width: 100%;
    transition: all ease-in-out 200ms;
    
    &:focus-within {
        border-color: ${ColorScheme.textLightShades.shades20};

        ${StyledIcon} {
            color: ${ColorScheme.textDark};
        }
    }
`


const StyledInput = styled.input`
    padding: 0.75rem 0.75rem;
    width: 100%;
    font-size: ${FontSize.normal};
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