import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '../utils'

interface IProps { to: string, text: string, className?: string }
const Link: React.FC<IProps> = ({
    to,
    text,
    className = ''
}) => {
    return (
        <StyledLink href={to} className={className}>{text}</StyledLink>
    )
}

export default Link

const StyledLink = styled.a`
    text-decoration: none;
    color: ${ColorScheme.primary};
    font-size: 0.8em;
    line-height: 1;
    transition: all ease-in-out 200ms;

    &:hover {
        color: ${ColorScheme.primaryShades.shade20};
    }
`