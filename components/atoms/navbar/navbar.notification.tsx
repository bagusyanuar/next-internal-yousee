import { ColorScheme } from '@/components/utils'
import React from 'react'
import styled from 'styled-components'

interface IProps {
    notification: number
    className?: string
}
const NavbarNotification: React.FC<IProps> = ({ notification, className = '' }) => {
    return (
        <Wrapper className={className}>
            <i className='bx bx-bell'></i>
            <StyledBadgeNotification $show={(notification > 0)}>
                <span>{notification}</span>
            </StyledBadgeNotification>
        </Wrapper>
    )
}

export default NavbarNotification

const Wrapper = styled.a`
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all ease-in-out 200ms;

    &:hover {
        background-color: ${ColorScheme.textDarkTint.tint80};
    }

    i {
        color: ${ColorScheme.textDark};
        font-size: 1.5em;
    }
`

const StyledBadgeNotification = styled.div<{ $show: boolean }>`
    display: ${({ $show }) => $show ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background-color: ${ColorScheme.primary};
    border-radius: 5px;

    span {
        font-size: 0.6em;
        color: white;
        margin-bottom: 0;
        line-height: 1;
    }
`