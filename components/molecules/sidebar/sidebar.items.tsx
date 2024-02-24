import React from 'react'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import { SidebarItem } from '@/components/atoms/sidebar'

interface IProps { className?: string }
const SidebarItems: React.FC<IProps> = ({ className = '' }) => {
    const pathName = usePathname()
    return (
        <Wrapper className={className}>
            <SidebarItem to='/sample/dashboard' icon='bx bxs-dashboard' text='Dashboard' className={`${pathName.startsWith('/sample/dashboard') ? 'active' : ''}`} />
            <SidebarItem to='#' icon='bx bx-user' text='Users' />
            <SidebarItem to='#' icon='bx bx-category-alt' text='Categories' />
            <SidebarItem to='#' icon='bx bx-network-chart' text='Vendors' />
            <SidebarItem to='#' icon='bx bx-briefcase' text='Products' />
            <SidebarItem to='#' icon='bx bx-receipt' text='Projects' />
        </Wrapper>
    )
}

export default SidebarItems

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`