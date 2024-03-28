import { ColorScheme } from '@/components/utils'
import React from 'react'
import styled from 'styled-components'

interface IProps {
    children: React.ReactNode
    className?: string
}
const Table: React.FC<IProps> = ({
    children,
    className = ''
}) => {
    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    )
}

export default Table

const Wrapper = styled.table`
    width: 100%;
    background: transparent;
`

interface ITRProps {
    children: React.ReactNode
    className?: string
}

export const TR: React.FC<ITRProps> = ({
    children,
    className = ''
}) => {
    return (
        <StyledTR className={className}>
            {children}
        </StyledTR>
    )
}

const StyledTR = styled.tr`
    width: 100%;
    border-bottom: 1px solid ${ColorScheme.textDarkTint.tint80};
`

interface ITHProps {
    children: React.ReactNode
    className?: string
    width?: string
    align?: 'left' | 'center' | 'right'
}

export const TH: React.FC<ITHProps> = ({
    children,
    className = '',
    width,
    align = 'left'
}) => {
    return (
        <StyledTH
            $width={width}
            className={className}
        >
            <StyledTHContent $align={align}>
                {children}
            </StyledTHContent>
        </StyledTH>
    )
}

type TTHProps = {
    $width?: string
}
const StyledTH = styled.th<TTHProps>`
    font-size: 0.8em;
    font-weight: 600;
    color: ${ColorScheme.textDark};
    width: ${({ $width }) => $width ? $width : 'auto'};
`

type TTHContentProps = {
    $align?: 'left' | 'center' | 'right'
}

const StyledTHContent = styled.div<TTHContentProps>`
    width: 100%;
    text-align: ${({ $align }) => $align ? $align : 'left'};
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
`

interface ITDProps {
    children: React.ReactNode
    className?: string
}

export const TD: React.FC<ITDProps> = ({
    children,
    className = ''
}) => {
    return (
        <StyledTD className={className}>
            {children}
        </StyledTD>
    )
}

const StyledTD = styled.td`
    padding: 1rem 1rem;
    font-size: 0.8em;
    color: ${ColorScheme.textLightShades.shades20};
`