'use client'

import React from 'react'
import styled from 'styled-components'
import InputText from '@/components/input/text/group/validator'
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

            </FormWrapper>
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