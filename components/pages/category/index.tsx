'use client'

import React from 'react'
import styled from 'styled-components'
import Card from '@/components/card'
import SectionHeader from './section/header'
import SectionTable from './section/table'

const CategoryPage = () => {
    return (
        <Wrapper>
            <SectionHeader />
            <hr />
            <SectionTable />
        </Wrapper>
    )
}

export default CategoryPage

const Wrapper = styled(Card)`
    width: 100%;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
`