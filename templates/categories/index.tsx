'use client'

import React from 'react'
import { Layout } from '@/components/organisms/layout'
import { Card } from '@/components/atoms/card'
import styled from 'styled-components'
import { SectionTitle } from '@/components/atoms/typography'
import { ButtonADD } from '@/components/atoms/form/button'
import { CategoriesTable, CategoriesHeader } from '@/components/molecules/pages/categories'

function CategoriesTemplate() {

    return (
        <Layout
            pageTitle={{ title: 'Categories', subTitle: 'Manage your advertise categories', withBackButton: false }}
            userProfile={{ image: '/assets/static/avatar.png', user: 'username', role: 'superadmin' }}
        >
            <Wrapper>
                <CategoriesHeader />
                <hr className='mb-4'/>
                <CategoriesTable />
            </Wrapper>
        </Layout>
    )
}

export default CategoriesTemplate

const Wrapper = styled(Card)`
    width: 100%;
`



