import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { SidebarWidth } from '@/components/utils'
import { SidebarBrand } from '@/components/atoms/sidebar'

interface IProps { className?: string }
const Sidebar: React.FC<IProps> = ({ className = '' }) => {
    return (
        <Wrapper>
            <SidebarContainer>
                <SidebarBrand image='/assets/static/brand.png' />
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
    padding: 0.5rem 0.5rem;
`

const SidebarContainer = styled.div`
    width: 100%;
    height: calc(100vh - 1rem);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: white;
    padding: 1rem 1rem;
`