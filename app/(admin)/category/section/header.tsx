'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import SectionTitle from '@/components/typography/section.title'
import Button from '@/components/button'

const Header: React.FC = () => {
    const router = useRouter()

    const handleGoToAddPage = () => {
        router.push('/category/add')
    }
    return (
        <Wrapper>
            <SectionTitle text='Categories Data' />
            <Button onClick={handleGoToAddPage}>
                <ButtonContent>
                    <i className='bx bx-plus'></i>
                    <span>ADD</span>
                </ButtonContent>
            </Button>
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

const ButtonContent = styled.div`
    display: flex;
    align-items: center;

    i {
        margin-right: 0.25rem;
        line-height: 0;
    }
`