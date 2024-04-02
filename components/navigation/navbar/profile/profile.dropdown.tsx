import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'

interface IProps {
    className?: string
}
const NavbarProfileDropdown: React.FC<IProps> = ({
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            <ProfileWrapper>
                <p className='user-profile'>John Doe</p>
                <p className='user-role'>administrator</p>
            </ProfileWrapper>
            <hr />
            <MenuWrapper>
                <DropdownMenu href='#'>
                    <i className='bx bx-lock-alt'></i>
                    <span>Reset Password</span>
                </DropdownMenu>
                <DropdownMenu href='#'>
                    <i className='bx bx-power-off'></i>
                    <span>Logout</span>
                </DropdownMenu>
            </MenuWrapper>
        </Wrapper>
    )
}

export default NavbarProfileDropdown

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    min-width: 200px;
    border-radius: 10px;
    background-color: white;
    position: absolute;
    top: 30px;
    right: 0;
    opacity: 0;
    transition: opacity 200ms ease-in-out, top 200ms ease-in-out, visibility 200ms linear;
    
    visibility: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &.open {
        visibility: visible;
        opacity: 1;
        top: 50px;
    }

    hr {
        height: 1px;
        margin-top: 0;
        margin-bottom: 0;
    }
`

const ProfileWrapper = styled.div`
    width: 100%;
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;

    .user-profile {
        font-size: 0.8em;
        font-weight: 500;
        color: ${ColorScheme.textDark};
        line-height: 1;
        margin-bottom: 5px;
    }

    .user-role {
        font-size: 0.8em;
        color: ${ColorScheme.textLightShades.shades20};
        line-height: 1;
    }
`

const MenuWrapper = styled.div`
    width: 100%;
    padding: 0.75rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`

const DropdownMenu = styled.a`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 0.8em;
    color: ${ColorScheme.textDark};
    padding: 0.75rem 0.5rem;
    border-radius: 5px;
    
    &:hover {
        background-color: color-mix(in srgb, ${ColorScheme.textDark} 5%, white);
    }

    i {
        margin-right: 0.5rem;
        line-height: 1;
    }

    span {
        line-height: 1;
    }
`