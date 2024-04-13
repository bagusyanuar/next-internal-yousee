'use client'

import React from 'react'
import styled from 'styled-components'
import InputText from '@/components/input/text/group/validator'
import InputArea from '@/components/input/textarea/group/validator'
import InputTextIcon from '@/components/input/text/group/validator.icon'
import InputPasswordIcon from '@/components/input/password/group/validator.icon'
import Divider from '@/components/divider'
import { ColorScheme } from '@/components/color'
import { FontSize } from '@/components/utils'

const Form = () => {
    return (
        <Wrapper>
            <FormWrapper>
                <FormRowWrapper>
                    <InputText
                        value=''
                        validator=''
                        label='Company Name'
                        placeholder='ex: PT. Company'
                        required
                        onChange={() => { }}
                        disabled={false}
                    />
                    <InputText
                        value=''
                        validator=''
                        label='Brand Name'
                        placeholder='ex: Brand Advertising'
                        required
                        onChange={() => { }}
                        disabled={false}
                    />
                </FormRowWrapper>
                <InputArea
                    value=''
                    validator=''
                    label='Address'
                    placeholder='ex: jl. patimura no. 8'
                    required
                    onChange={() => { }}
                    disabled={false}
                />
                <InputTextIcon
                    value=''
                    label='Phone'
                    icon='bx bxs-phone'
                    placeholder='ex: +628975xxxx'
                    validator=''
                    onChange={() => { }}
                    disabled={false}
                />
            </FormWrapper>
            <Divider />
            <FormWrapper>
                <FormRowWrapper>
                    <InputTextIcon
                        value=''
                        label='PIC Name'
                        icon='bx bx-user-pin'
                        placeholder='ex: john doe'
                        validator=''
                        onChange={() => { }}
                        disabled={false}
                    />
                    <InputTextIcon
                        value=''
                        label='PIC Phone'
                        icon='bx bxs-phone'
                        placeholder='ex: +628975xxxx'
                        validator=''
                        onChange={() => { }}
                        disabled={false}
                    />
                </FormRowWrapper>
            </FormWrapper>
            <Divider />
            <FormWrapper>
                <FormRowWrapper>
                    <InputTextIcon
                        value=''
                        label='Email'
                        icon='bx bx-user'
                        placeholder='ex: damn.john88@gmail.com'
                        validator=''
                        onChange={() => { }}
                        disabled={false}
                    />
                    <InputPasswordIcon
                        value=''
                        label='Password'
                        icon='bx bx-lock-alt'
                        placeholder='password'
                        validator=''
                        onChange={() => {}}
                        disabled={false}
                        withShowPassword
                    />
                </FormRowWrapper>
            </FormWrapper>
            <Divider />
        </Wrapper>
    )
}

export default Form

const Wrapper = styled.div`
    width: 100%;
`
const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

const FormRowWrapper = styled.div`
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
`