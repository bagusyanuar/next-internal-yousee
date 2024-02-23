import React, { useState, HTMLInputTypeAttribute } from 'react'
import styled from 'styled-components'
import { ColorScheme, InputRadius, InputFontSize } from '@/components/utils'

interface IProps {
    value: string
    icon: string
    id?: string
    name?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    placeholder?: string
    withShowPassword?: boolean
}
const InputPasswordIcon: React.FC<IProps> = ({
    value,
    icon,
    id,
    name,
    onChange = (e) => { },
    className = '',
    placeholder = '',
    withShowPassword = false
}) => {
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
            <StyledIcon className={icon} />
            <StyledInput
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder} />
            {
                withShowPassword
                    ?
                    <StyledShowPasswordIcon className={showIcon} onClick={handleChangeType} />
                    :
                    <></>
            }

        </Wrapper>
    )
}

export default InputPasswordIcon

const StyledInput = styled.input`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-right: 0.75rem;
    padding-left: 0.5rem;
    width: 100%;
    font-size: ${InputFontSize.medium};
    border-radius: ${InputRadius.small};
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

const StyledShowPasswordIcon = styled.i`
    background-color: transparent;
    margin-right: 0.5rem;
    color: ${ColorScheme.textLight};
    transition: all ease-in-out 200ms;
    cursor: pointer;
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

        ${StyledIcon} {
            color: ${ColorScheme.textDark};
        }
    }
`

