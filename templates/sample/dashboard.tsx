import React, { useCallback, useEffect } from 'react'
import { Layout } from '@/components/organisms/layout'
import { TPageTitle, TProfile } from '@/components/utils'
import { CardStream } from '@/components/atoms/card'

interface IProps { pageTitle: TPageTitle, userProfile: TProfile }
function DashboardTemplateSample({ pageTitle, userProfile }: IProps) {
    return (
        <Layout pageTitle={pageTitle} userProfile={userProfile} notification={1}>
            <CardStream onStream>

            </CardStream>
        </Layout>
    )
}

export default DashboardTemplateSample