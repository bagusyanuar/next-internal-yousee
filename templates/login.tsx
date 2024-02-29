'use client'

import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/utils'
import { FormLogin } from '@/components/molecules/login'
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginTemplate() {
  return (
    <Wrapper>
      <FormLogin />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
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