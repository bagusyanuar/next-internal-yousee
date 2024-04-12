'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import BackButton from '@/components/button/button.back'
import SectionTitle from '@/components/typography/section.title'

const Header = () => {
    const router = useRouter()

    const handleBackPage = () => {
        router.back()
    }

    return (
        <Wrapper>
            <Back onClick={handleBackPage} />
            <SectionTitle text='Create New Vendor' />
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Back = styled(BackButton)`
    margin-right: 0.5rem;
`