import React from 'react'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import SidebarBrand from './sidebar.brand'
import SidebarItem from './sidebar.item'
import { SidebarWidth } from '@/components/utils'
import { ClientPath } from '@/lib/path'

const Sidebar: React.FC = () => {
    const pathName = usePathname()
    return (
        <Wrapper>
            <SidebarContainer>
                <SidebarBrand />
                <SidebarItemWrapper>
                    <SidebarItem to={ClientPath.dashboard.index} text='Dashboard' icon='bx bxs-dashboard' className={`${pathName.startsWith('/dashboard') ? 'active' : ''}`} />
                    <SidebarItem to='#' text='User' icon='bx bx-user' className={`${pathName.startsWith('/user') ? 'active' : ''}`} />
                    <SidebarItem to={ClientPath.category.index} text='Category' icon='bx bx-category-alt' className={`${pathName.startsWith('/category') ? 'active' : ''}`} />
                    <SidebarItem to='#' text='Vendor' icon='bx bx-network-chart' className={`${pathName.startsWith('/vendor') ? 'active' : ''}`} />
                    <SidebarItem to='#' text='Product' icon='bx bx-briefcase' className={`${pathName.startsWith('/product') ? 'active' : ''}`} />
                    <SidebarItem to='#' text='Project' icon='bx bx-receipt' className={`${pathName.startsWith('/project') ? 'active' : ''}`} />
                </SidebarItemWrapper>
            </SidebarContainer>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    height: 100vh;
    width: ${SidebarWidth};
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem 1rem;
`

const SidebarContainer = styled.div`
    width: 100%;
    height: calc(100vh - 2rem);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: white;
    padding: 1rem 1rem;
`

const SidebarItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`