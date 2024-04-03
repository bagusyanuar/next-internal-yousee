'use client'

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify';
import Card from '@/components/card'
import InputText from '@/components/input/text/text.validator.icon'
import InputPassword from '@/components/input/password/password.validator.icon'
import ButtonLoading from '@/components/button/button.loading'
import { ColorScheme } from '@/components/color'
import { TOAST, ToastSuccess } from '@/components/toast'
import BrandImage from '@/public/assets/static/brand.png'
import {
    LoginState,
    SetUsername,
    SetPassword,
    SetRememberMe,
} from '@/redux/login/slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const LoginPage: React.FC = () => {
    const StateLogin = useAppSelector(LoginState)
    const dispatch = useAppDispatch()

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SetUsername(e.currentTarget.value))
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SetPassword(e.currentTarget.value))
    }

    const handleLogin = () => {
        TOAST(<ToastSuccess text='success' />, {
            timeToClose: 2000,
            onClose: () => {
                console.log('toast close');
                // router.push(PageRouter.Dashboard)
            }
        })
    }

    return (
        <Wrapper>
            <ContentWrapper>
                <Image src={BrandImage} alt='brand-image' priority />
                <FormUsername
                    id='username'
                    value={StateLogin.Username}
                    onChange={handleChangeUsername}
                    icon='bx bx-user'
                    placeholder='username'
                    validator=''
                />
                <FormPassword
                    value={StateLogin.Password}
                    onChange={handleChangePassword}
                    icon='bx bx-lock-alt'
                    withShowPassword
                    placeholder='password'
                    validator=''
                />
                <LoginButton
                    onLoading={false}
                    onClick={handleLogin}
                    className='btn-login'
                >
                    <span>Login</span>
                </LoginButton>
            </ContentWrapper>
            <ToastContainer
                hideProgressBar
            />
        </Wrapper>
    )
}

export default LoginPage

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${ColorScheme.primaryTint.tint80};
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContentWrapper = styled(Card)`
    width: 350px;
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 150px;
        height: auto;
        margin-bottom: 1.5rem;
    }
`

const FormUsername = styled(InputText)`
    margin-bottom: 0.75rem;
`

const FormPassword = styled(InputPassword)`
    margin-bottom: 0.75rem;
`

const LoginButton = styled(ButtonLoading)`
    width: 100%;
`