import React, { useId } from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'
import { InputRadius } from '@/components/utils'

interface IProps {
    value: string
    icon: string
    validator: string
    id?: string
    name?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    placeholder?: string
}

const InputTextValidatorIcon: React.FC<IProps> = ({
    value,
    icon,
    validator,
    id,
    name,
    onChange = (e) => { },
    className = '',
    placeholder = ''
}) => {
    const inputID = `input-field-${useId()}`

    return (
        <MainWrapper className={className}>
            <Wrapper>
                <StyledIcon className={icon} />
                <StyledInput
                    type='text'
                    id={id || inputID}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
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

export default InputTextValidatorIcon

const StyledInput = styled.input`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-right: 0.75rem;
    padding-left: 0.5rem;
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

const StyledIcon = styled.i`
    background-color: transparent;
    margin-left: 0.5rem;
    color: ${ColorScheme.textLight};
    transition: all ease-in-out 200ms;
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

        ${StyledIcon} {
            color: ${ColorScheme.textDark};
        }
    }
`

const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`