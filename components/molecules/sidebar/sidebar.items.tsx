import React from 'react'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import { SidebarItem } from '@/components/atoms/sidebar'

interface IProps { className?: string }
const SidebarItems: React.FC<IProps> = ({ className = '' }) => {
    const pathName = usePathname()
    return (
        <Wrapper className={className}>
            <SidebarItem to='/dashboard' icon='bx bxs-dashboard' text='Dashboard' className={`${pathName.startsWith('/dashboard') ? 'active' : ''}`} />
            <SidebarItem to='#' icon='bx bx-user' text='Users' />
            <SidebarItem to='/categories' icon='bx bx-category-alt' text='Categories' className={`${pathName.startsWith('/categories') ? 'active' : ''}`}  />
            <SidebarItem to='/vendors' icon='bx bx-network-chart' text='Vendors' className={`${pathName.startsWith('/vendors') ? 'active' : ''}`} />
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