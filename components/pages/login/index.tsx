'use client'

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { ToastContainer } from 'react-toastify';
import Card from '@/components/card'
import InputText from '@/components/input/text/text.validator.icon'
import InputPassword from '@/components/input/password/password.validator.icon'
import ButtonLoading from '@/components/button/button.loading'
import Checkbox from '@/components/checkbox'
import Link from '@/components/link'
import { ColorScheme } from '@/components/color'
import { TOAST, ToastSuccess, ToastError } from '@/components/toast'
import { APIResponse } from '@/lib/jsonResponse'
import { ClientPath } from '@/lib/path'
import BrandImage from '@/public/assets/static/brand.png'
import {
    LoginState,
    SetUsername,
    SetPassword,
    SetRememberMe,
} from '@/redux/login/slice'
import { submit } from '@/redux/login/action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const LoginPage: React.FC = () => {
    const StateLogin = useAppSelector(LoginState)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SetUsername(e.currentTarget.value))
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SetPassword(e.currentTarget.value))
    }

    const handleChangeRememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SetRememberMe(e.currentTarget.checked))
    }


    const handleLogin = () => {
        dispatch(submit()).then(response => {
            const payload: APIResponse = response.payload as APIResponse
            switch (payload.code) {
                case 200:
                    TOAST(<ToastSuccess text={payload.message} />, {
                        timeToClose: 1000,
                        onClose: () => {
                            router.replace(ClientPath.dashboard.index)
                        }
                    })
                    break;
                default:
                    TOAST(<ToastError text={payload.message} />, {
                        timeToClose: 2000,
                    })
                    break;
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
                <OptionWrapper>
                    <Checkbox
                        text='Remember Me'
                        value='1'
                        checked={StateLogin.RememberMe}
                        onChange={handleChangeRememberMe}
                    />
                    <ForgotPassword to='/forgot-password' text='Forgot Password?' />
                </OptionWrapper>
                <LoginButton
                    onLoading={StateLogin.LoadingLogin}
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

const OptionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.75rem;
`
const ForgotPassword = styled(Link)`
    font-weight: 500;
    font-size: 0.7em;
`

const LoginButton = styled(ButtonLoading)`
    width: 100%;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
`