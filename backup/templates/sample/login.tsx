import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { ColorScheme, CardPadding } from '@/components/utils'
import { Card } from '@/components/atoms/card'
import { InputTextIcon, InputPasswordIcon } from '@/components/atoms/form/input'
import { Button } from '@/components/atoms/form/button'
import { Checkbox } from '@/components/atoms/form/checkbox'
import { Link } from '@/components/atoms/link'


function LoginTemplateSample() {
    return (
        <MainWrapper>
            {/* <Wrapper>
                <Image src='/assets/static/brand.png' width={150} height={150} alt='brand-image' priority />
                <InputTextIcon icon='bx bx-user' placeholder='username' className='mb-3' />
                <InputPasswordIcon icon='bx bx-lock-alt' placeholder='password' className='mb-3' />
                <ActionWrapper className='mb-5'>
                    <Checkbox text='Remmember Me' />
                    <ForgotPassword to='#' text='Forgot Password?' />

                </ActionWrapper>
                <Button className='w-full'>Login</Button>

            </Wrapper> */}
        </MainWrapper>
    )
}

export default LoginTemplateSample

const MainWrapper = styled.main`
    width: 100%;
    height: 100vh;
    background-color: ${ColorScheme.primaryTint.tint80};
    display: flex;
    align-items: center;
    justify-content: center;
`

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
`