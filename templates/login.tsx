'use client'

import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/utils'
import { FormLogin } from '@/components/molecules/login'

function LoginTemplate() {
  return (
    <Wrapper>
      <FormLogin />
    </Wrapper>
  )
}

export default LoginTemplate

const Wrapper = styled.main`
    width: 100%;
    height: 100vh;
    background-color: ${ColorScheme.primaryTint.tint80};
    display: flex;
    align-items: center;
    justify-content: center;
`