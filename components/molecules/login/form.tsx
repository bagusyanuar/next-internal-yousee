import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/atoms/card'
import styled from 'styled-components'
import {
    InputTextIconValidator as FormText,
    InputPasswordIconValidator as FormPassword
} from '@/components/atoms/form/input'
import { Checkbox } from '@/components/atoms/form/checkbox'
import { Link } from '@/components/atoms/link'
import { ButtonLoading } from '@/components/atoms/form/button'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
    LoginState,
    SetUsername,
    SetPassword,
    SetRememberMe,
    SetLoadingLogin
} from '@/redux/login/slice'
import { submit } from '@/redux/login/action'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast("Wow so easy !");

interface IProps { className?: string }
const FormLogin: React.FC<IProps> = ({ className = '' }) => {
    const StateLogin = useAppSelector(LoginState)
    const dispatch = useAppDispatch()
    

    return (
        <Wrapper className={className}>
            <Image src='/assets/static/brand.png' width={150} height={150} alt='brand-image' priority />
            <FormText
                id='username'
                value={StateLogin.Username}
                onChange={(e) => { dispatch(SetUsername(e.currentTarget.value)) }}
                icon='bx bx-user'
                placeholder='username'
                className='mb-3'
                validator=''
            />
            <FormPassword
                value={StateLogin.Password}
                onChange={(e) => { dispatch(SetPassword(e.currentTarget.value)) }}
                icon='bx bx-lock-alt'
                withShowPassword
                placeholder='password'
                className='mb-3'
                validator=''
            />
            <div className='action-wrapper'>
                <Checkbox
                    text='Remember Me'
                    value='1'
                    checked={StateLogin.RememberMe}
                    onChange={(e) => { dispatch(SetRememberMe(e.currentTarget.checked)) }}
                />
                <ForgotPassword to='#' text='Forgot Password?' />
            </div>
            <ButtonLoading
                onLoading={StateLogin.LoadingLogin}
                onClick={() => {
                    // dispatch(submit())
                    toast("Wow so easy !")
                }}
                className='btn-login'
            >
                <span>Login</span>
            </ButtonLoading>
            <ToastContainer />
        </Wrapper>
    )
}

export default FormLogin

const Wrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    padding: 2rem 2rem;
    
    img {
        margin-bottom: 1.5rem;
        width: 150px;
        height: auto;
    }

    .action-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 1.5rem;
    }

    .btn-login {
        width: 100%;
    }
`

const ForgotPassword = styled(Link)`
    font-weight: 500;
    font-size: 0.7em;
`