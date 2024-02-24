import React, { useCallback, useEffect } from 'react'
import { Layout } from '@/components/organisms/layout'
import { useAppDispatch } from '@/redux/hooks'
import { useNavbar } from './hooks'

function DashboardTemplateSample() {
    const dispatch = useAppDispatch()
    useNavbar(dispatch, 'Dashboard')

    return (
        <Layout>

        </Layout>
    )
}

export default DashboardTemplateSample