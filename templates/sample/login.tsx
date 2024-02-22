import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { ColorScheme, CardPadding } from '@/components/utils'
import { Card } from '@/components/card'
import { InputTextIcon, InputPasswordIcon } from '@/components/form/input'


function LoginTemplateSample() {
    return (
        <MainWrapper>
            <Wrapper>
                <Image src='/assets/static/brand.png' width={150} height={150} alt='brand-image' priority />
                <FormUsername icon='bx bx-user' placeholder='username' />
                <InputPasswordIcon icon='bx bx-lock-alt' placeholder='password' />
            </Wrapper>
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

const FormUsername = styled(InputTextIcon)`
    margin-bottom: 1rem;
`