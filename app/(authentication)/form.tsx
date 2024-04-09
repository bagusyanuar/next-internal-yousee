'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify';

import Card from '@/components/card'
import BrandImage from '@/public/assets/static/brand.png'
import InputText from '@/components/input/text/group/validator.icon'
import InputPassword from '@/components/input/password/group/validator.icon'
import Checkbox from '@/components/checkbox'
import Link from '@/components/link'
import ButtonLoading from '@/components/button/button.loading'
import { FontSize } from '@/components/utils'
import { ColorScheme } from '@/components/color'
import { TOAST, ToastSuccess, ToastError } from '@/components/toast'
import { APIResponse } from '@/lib/jsonResponse'
import { ClientPath } from '@/lib/path'
import {
    LoginState,
    SetUsername,
    SetPassword,
    SetRememberMe,
    SetLoadingLogin
} from '@/redux/login/slice'
import { submit } from '@/redux/login/action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const Form: React.FC = () => {
    const StateLogin = useAppSelector(LoginState)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SetUsername(e.currentTarget.value))
    }

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SetPassword(e.currentTarget.value))
    }

    const onRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SetRememberMe(e.currentTarget.checked))
    }

    const onSubmit = () => {
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
            <Image src={BrandImage} alt='brand-image' priority />
            <GreetingText>
                Welcome To Yousee Internal App
            </GreetingText>
            <InputWrapper>
                <InputText
                    value={StateLogin.Username}
                    icon='bx bx-user'
                    placeholder='username'
                    validator=''
                    onChange={onUsernameChange}
                    disabled={StateLogin.LoadingLogin}
                />
                <InputPassword
                    value={StateLogin.Password}
                    icon='bx bx-lock-alt'
                    placeholder='password'
                    validator=''
                    onChange={onPasswordChange}
                    disabled={StateLogin.LoadingLogin}
                    withShowPassword
                />
            </InputWrapper>
            <OptionWrapper>
                <RememberMe
                    text='Remember Me'
                    value='0'
                    checked={StateLogin.RememberMe}
                    onChange={onRememberMeChange}
                />
                <ForgotPassword to='/forgot-password' text='Forgot Password?' />
            </OptionWrapper>
            <ButtonLogin
                onLoading={StateLogin.LoadingLogin}
                onClick={onSubmit}
                className='btn-login'
            >
                <span>Login</span>
            </ButtonLogin>
            <ToastContainer
                hideProgressBar
            />
        </Wrapper>
    )
}

export default Form

const Wrapper = styled(Card)`
    width: 350px;
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 150px;
        height: auto;
    }
`

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
`

const GreetingText = styled.p`
    font-size: ${FontSize.normal};
    color: ${ColorScheme.textLight};
    margin-bottom: 1rem;
    font-weight: 500;
`

const OptionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.75rem;
`

const RememberMe = styled(Checkbox)`
    input {
        margin-right: 0.25em;
    }

    label {
        font-size: 0.7em;
    }
`

const ForgotPassword = styled(Link)`
    font-weight: 500;
    font-size: 0.7em;
`

const ButtonLogin = styled(ButtonLoading)`
    width: 100%;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
`