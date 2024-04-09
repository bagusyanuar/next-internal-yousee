'use client'

import React, { useState, HTMLInputTypeAttribute, useId } from 'react'
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
    withShowPassword?: boolean
}

const InputPasswordGroupValidatorIcon: React.FC<IProps> = ({
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
    disabled = false,
    withShowPassword = false
}) => {
    const inputID = `password-field-${useId()}`
    const [type, setType] = useState<HTMLInputTypeAttribute>('password')
    const [showIcon, setShowIcon] = useState<string>('bx bx-show')

    const handleChangeType = () => {
        if (type === 'text') {
            setType('password')
            setShowIcon('bx bx-show')
        }

        if (type === 'password') {
            setType('text')
            setShowIcon('bx bx-low-vision')
        }
    }

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
                    type={type}
                    id={id || inputID}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                />
                {
                    withShowPassword
                        ?
                        <StyledShowPasswordIcon className={showIcon} onClick={handleChangeType} />
                        :
                        <></>
                }
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

export default InputPasswordGroupValidatorIcon

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

const StyledShowPasswordIcon = styled.i`
    background-color: transparent;
    margin-right: 0.75rem;
    color: ${ColorScheme.textLight};
    transition: all ease-in-out 200ms;
    cursor: pointer;
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
        
        ${StyledShowPasswordIcon} {
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