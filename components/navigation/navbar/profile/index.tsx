import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import AvatarFace from '@/public/assets/static/avatar-face.png'
import NavbarProfileDropdown from './profile.dropdown'

const NavbarProfile: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState<boolean>(false)

    const ref = useOuterClick(() => {
        setOpenDropdown(false)
    })

    const toggleDropdownHandler = () => {
        setOpenDropdown(openDropdown => !openDropdown)
    }

    return (
        <Wrapper onClick={toggleDropdownHandler}>
            <Image ref={ref}  src={AvatarFace} alt='user-avatar' priority />
            <NavbarProfileDropdown className={`${openDropdown ? 'open' : ''}`} />
        </Wrapper>
    )
}

export default NavbarProfile

const Wrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: relative;
    
    img {
        height: 50px;
        width: 50px;
        object-fit: cover;
        object-position: center center;
        border-radius: 50%;
    }
`

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
            // if (target?.contains(innerRef.current)) {
            //     callback()
            // }
            if (target !== innerRef.current) {
                callback()
            }
            
        };
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [callback, innerRef]);
    return innerRef
}