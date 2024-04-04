'use client'

import React from 'react'
import styled from 'styled-components'
import Card from '@/components/card'
import SectionHeader from './section/header.add'
import SectionForm from './section/form'

const CategoryAddPage = () => {
  return (
    <Wrapper>
        <SectionHeader />
        <Divider />
        <SectionForm />
    </Wrapper>
  )
}

export default CategoryAddPage

const Wrapper = styled(Card)`
    width: 100%;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
`

const Divider = styled.hr`
    margin-top: 1rem;
    margin-bottom: 1rem;
`