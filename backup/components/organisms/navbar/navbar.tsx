import React from 'react'
import styled from 'styled-components'
import { NavbarTitles, NavbarMenus } from '@/components/molecules/navbar'
import { TPageTitle, TProfile } from '@/components/utils'

interface IProps {
    pageTitle: TPageTitle
    userProfile: TProfile
    notification?: number
    className?: string

}
const Navbar: React.FC<IProps> = ({
    pageTitle,
    userProfile,
    notification = 0,
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            <NavbarTitles title={pageTitle.title} subTitle={pageTitle.subTitle} />
            <NavbarMenus userProfile={userProfile} notification={notification} />
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.div`
    width: 100%;
    padding-right: 1rem;
    padding-left: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`