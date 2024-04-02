import { ColorScheme } from '@/components/utils'
import React from 'react'
import styled from 'styled-components'

interface IProps {
    to: string
    icon: string
    text: string
    className?: string
}

const SidebarItem: React.FC<IProps> = ({
    to,
    icon,
    text,
    className = ''
}) => {
    return (
        <Wrapper href={to} className={className}>
            <i className={icon}></i>
            <span>{text}</span>
        </Wrapper>
    )
}

export default SidebarItem

const Wrapper = styled.a`
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${ColorScheme.primary};
    transition: background-color ease-in-out 200ms, color ease-in-out 250ms;
    border-radius: 10px;
    padding: 0.75rem 0.75rem;
    font-size: 1em;

    &:hover {
        background-color: ${ColorScheme.primary};
        color: white;
    }

    &.active {
        background-color: ${ColorScheme.primary};
        color: white;
    }

    i {
        margin-right: 0.5rem;
    }

    span {
        font-weight: 400;
    }
`