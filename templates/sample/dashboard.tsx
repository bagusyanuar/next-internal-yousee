import React, { useCallback, useEffect } from 'react'
import { Layout } from '@/components/organisms/layout'
import { CardInformations } from '@/components/organisms/dashboard'
import { TPageTitle, TProfile } from '@/components/utils'
import styled from 'styled-components'

interface IProps { pageTitle: TPageTitle, userProfile: TProfile }
function DashboardTemplateSample({ pageTitle, userProfile }: IProps) {
    return (
        <Layout
            pageTitle={pageTitle}
            userProfile={userProfile}
            notification={1}
        >
            <CardInformations className='mb-5' />
            <SecondSectionWrapper>
                <TableProjectWrapper></TableProjectWrapper>
            </SecondSectionWrapper>
        </Layout>
    )
}

export default DashboardTemplateSample

const SecondSectionWrapper = styled.div`
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const TableProjectWrapper = styled.div`
    width: 100%;
    grid-column: 1 / span 3;
    min-height: 100px;
    background-color: rebeccapurple;
`