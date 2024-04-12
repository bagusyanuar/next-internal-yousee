'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import SectionTitle from '@/components/typography/section.title'
import ButtonADD from '@/components/button/button.add'
import { ClientPath } from '@/lib/path'

const Header: React.FC = () => {
    const router = useRouter()

    const handleGoToAddPage = () => {
        router.push(ClientPath.vendor.add)
    }
    
    return (
        <Wrapper>
            <SectionTitle text='Vendor List' />
            <ButtonADD onClick={handleGoToAddPage} />
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`