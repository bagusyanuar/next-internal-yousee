'use client'

import React from 'react'
import styled from 'styled-components'
import Card from '@/components/card'

interface IProps { children: React.ReactNode }
const Container: React.FC<IProps> = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Container

const Wrapper = styled(Card)`
    width: 100%;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
`