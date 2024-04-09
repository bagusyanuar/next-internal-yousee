'use client'

import { ColorScheme } from '@/components/color'
import React from 'react'
import styled from 'styled-components'

interface IProps { children: React.ReactNode }

const Container: React.FC<IProps> = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Container

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${ColorScheme.primaryTint.tint80};
    display: flex;
    align-items: center;
    justify-content: center;
`