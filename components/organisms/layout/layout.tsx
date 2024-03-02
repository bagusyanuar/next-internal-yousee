import React from 'react'
import styled from 'styled-components'
import { ColorScheme, SidebarWidth, TPageTitle, TProfile } from '@/components/utils'
import { Sidebar } from '@/components/organisms/sidebar'
import { Navbar } from '@/components/organisms/navbar'

interface IProps {
    children?: React.ReactNode
    className?: string
    pageTitle: TPageTitle
    userProfile: TProfile
    notification?: number
}
const Layout: React.FC<IProps> = ({
    children,
    pageTitle,
    userProfile,
    notification = 0,
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            <Sidebar />
            <ContentWrapper>
                <Navbar
                    pageTitle={pageTitle}
                    userProfile={userProfile}
                    notification={notification}
                    className='mb-3'
                />
                {children}
            </ContentWrapper>

        </Wrapper>
    )
}

export default Layout

const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;
    overflow: auto;
    background-color: ${ColorScheme.primaryTint.tint90};
    position: relative;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: ${SidebarWidth};
    padding-right: 1rem;
    width: 100%;
`