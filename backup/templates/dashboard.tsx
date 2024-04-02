'use client'

import React from 'react'
import { Layout } from '@/components/organisms/layout'
import { TPageTitle, TProfile } from '@/components/utils'

function DashboardTemplate() {
  const pageTitle: TPageTitle = {
    title: 'Dashboard',
    subTitle: 'Welcome to yousee dashboard app',
    withBackButton: false
  }

  const userProfile: TProfile = {
    image: '/assets/static/avatar.png',
    user: 'Username',
    role: 'administrator'
  }
  return (
    <Layout
      pageTitle={pageTitle}
      userProfile={userProfile}
      notification={1}>
        <div>Dashboard</div>
    </Layout>
  )
}

export default DashboardTemplate