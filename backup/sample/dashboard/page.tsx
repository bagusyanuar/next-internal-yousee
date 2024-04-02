'use client'

import { DashboardTemplateSample } from '@/templates/sample'
import { TPageTitle, TProfile } from '@/components/utils'
export default function DashboardSample() {
    const pageTitle: TPageTitle = {
        title: 'Dashboard',
        subTitle: 'Welcome to Yousee dashboard',
        withBackButton: false
    }

    const userProfile: TProfile = {
        image: '/assets/static/avatar.png',
        user: 'Username',
        role: 'administrator'
    }
    return (
        <DashboardTemplateSample
            pageTitle={pageTitle}
            userProfile={userProfile}
        />
    )
}