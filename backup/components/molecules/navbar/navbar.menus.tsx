import React from 'react'
import styled from 'styled-components'
import { NavbarProfile, NavbarNotification } from '@/components/atoms/navbar'
import { TProfile } from '@/components/utils'

interface IProps {
    userProfile: TProfile
    notification: number
    className?: string
}
const NavbarMenus: React.FC<IProps> = ({
    userProfile,
    notification,
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            <NavbarNotification notification={notification} />
            <NavbarProfile profile={userProfile} />
        </Wrapper>
    )
}

export default NavbarMenus

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`