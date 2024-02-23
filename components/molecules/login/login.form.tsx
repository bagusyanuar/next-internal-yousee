import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Card } from '@/components/atoms/card'
import {
    InputTextIcon as FormText,
    InputPasswordIcon as FormPassword
} from '@/components/atoms/form/input'
import { Checkbox } from '@/components/atoms/form/checkbox'
import { Link } from '@/components/atoms/link'
import { CardPadding } from '@/components/utils'

interface IProps { className?: string }

const LoginFormMolecule: React.FC<IProps> = ({ className = '' }) => {
    return (
        <Wrapper className={className}>
            <Image src='/assets/static/brand.png' width={150} height={150} alt='brand-image' priority />
            <FormText
                value=''
                onChange={(e) => { console.log(e.currentTarget.value) }}
                icon='bx bx-user'
                placeholder='username'
                className='mb-3'
            />
            <FormPassword
                value='asdasd'
                onChange={(e) => { console.log(e.currentTarget.value) }}
                icon='bx bx-lock-alt'
                withShowPassword
                placeholder='password'
                className='mb-3'
            />
            <ActionWrapper>
                <Checkbox
                    text='Remember Me'
                    value='1'
                    checked={true}
                    onChange={(e) => {console.log(e.currentTarget.value)}}
                />
                <ForgotPassword to='#' text='Forgot Password?' />
            </ActionWrapper>
        </Wrapper>
    )
}

export default LoginFormMolecule

const Wrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    padding: ${CardPadding.large};

    img {
        margin-bottom: 1.5rem;
    }
`

const ActionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const ForgotPassword = styled(Link)`
    font-weight: 500;
    font-size: 0.7em;
`