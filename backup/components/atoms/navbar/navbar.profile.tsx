import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { ColorScheme, TProfile } from '@/components/utils'

interface IProps {
    profile: TProfile
    className?: string
}

const NavbarProfile: React.FC<IProps> = ({ profile, className = '' }) => {
    const [openDropdown, setOpenDropdown] = useState<boolean>(false)

    const ref = useOuterClick(() => {
        setOpenDropdown(false)
    })

    const openDropdownHandler = () => {
        setOpenDropdown(openDropdown => !openDropdown)
    }
    return (
        <Wrapper className={className} ref={ref} onClick={openDropdownHandler}>
            <Image src={profile.image} height={80} width={80} alt='profile-picture' />
            <DropdownWrapper className={`${openDropdown ? 'open' : ''}`}>
                <ProfileWrapper>
                    <p className='user-profile'>{profile.user}</p>
                    <p className='user-role'>{profile.role}</p>
                </ProfileWrapper>
                <hr />
                <ItemWrapper>
                    <DropdownItem href='#'>
                        <i className='bx bx-lock-alt'></i>
                        <span>Reset Password</span>
                    </DropdownItem>
                    <DropdownItem href='#'>
                        <i className='bx bx-power-off'></i>
                        <span>Logout</span>
                    </DropdownItem>
                </ItemWrapper>
            </DropdownWrapper>
        </Wrapper>
    )
}

export default NavbarProfile

function useOuterClick(callback: () => void): any {
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        window.addEventListener('click', handleClick);
        function handleClick(event: MouseEvent) {
            const target = event.target as HTMLAnchorElement
                | HTMLInputElement
                | HTMLParagraphElement
                | HTMLButtonElement
                | HTMLHeadingElement
                | HTMLDivElement;
            if (target?.contains(innerRef.current)) {
                callback()
            }
            console.log(innerRef);

        };
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [callback, innerRef]);
    return innerRef
}

const Wrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: relative;
    
    img {
        height: 45px;
        width: 45px;
        object-fit: cover;
        object-position: center center;
        border-radius: 50%;
    }
`

const DropdownWrapper = styled.div`
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

const ItemWrapper = styled.div`
    width: 100%;
    padding: 0.75rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`

const DropdownItem = styled.a`
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
