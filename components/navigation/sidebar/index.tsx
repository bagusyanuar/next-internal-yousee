import React from 'react'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import SidebarBrand from './sidebar.brand'
import SidebarItem from './sidebar.item'
import { SidebarWidth } from '@/components/utils'

const Sidebar: React.FC = () => {
    const pathName = usePathname()
    return (
        <Wrapper>
            <SidebarContainer>
                <SidebarBrand />
                <SidebarItemWrapper>
                    <SidebarItem to='#' text='Dashboard' icon='bx bxs-dashboard' className={`${pathName.startsWith('/dashboard') ? 'active' : ''}`} />
                    <SidebarItem to='#' text='User' icon='bx bx-user' className={`${pathName.startsWith('/user') ? 'active' : ''}`} />
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