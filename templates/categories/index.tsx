'use client'

import React from 'react'
import { Layout } from '@/components/organisms/layout'
import { Card } from '@/components/atoms/card'
import styled from 'styled-components'
import { SectionTitle } from '@/components/atoms/typography'
import { ButtonADD } from '@/components/atoms/form/button'

function CategoriesTemplate() {

    return (
        <Layout
            pageTitle={{ title: 'Categories', subTitle: 'Manage your advertise categories', withBackButton: false }}
            userProfile={{ image: '/assets/static/avatar.png', user: 'username', role: 'superadmin' }}
        >
            <Wrapper>
                <div className='flex items-center justify-between'>
                    <SectionTitle text='Categories Data' />
                    <ButtonADD onClick={() => { }} />
                </div>

                <hr />
            </Wrapper>
        </Layout>
    )
}

export default CategoriesTemplate

const Wrapper = styled(Card)`
    width: 100%;
`



