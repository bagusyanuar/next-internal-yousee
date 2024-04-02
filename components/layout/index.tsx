'use client'

import React from 'react'
import styled from 'styled-components'
import Sidebar from '@/components/navigation/sidebar'
import { SidebarWidth } from '@/components/utils'
import { ColorScheme } from '@/components/color'

interface IProps {
    children: React.ReactNode
}
const Layout: React.FC<IProps> = ({
    children,
}) => {
    return (
        <Wrapper>
            <Sidebar />
            <ContentWrapper>
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