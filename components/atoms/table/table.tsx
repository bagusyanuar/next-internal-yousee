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
    /* border-bottom: 1px solid ${ColorScheme.textDarkTint.tint80}; */
`

interface ITHProps {
    children: React.ReactNode
    className?: string
    width?: string
    align?: 'left' | 'center' | 'right'
    // sort?: {
    //     active: boolean
    //     key: string
    // }
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
                <span>{children}</span>
                {/* <a href='#'>
                    <i className='bx bx-sort-alt-2'></i>
                </a> */}
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
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        width: 100%;
        text-align: ${({ $align }) => $align ? $align : 'left'};
        padding: 0.5rem 0.75rem;
    }
`

interface ITDProps {
    children: React.ReactNode
    className?: string
    align?: 'left' | 'center' | 'right'
}

export const TD: React.FC<ITDProps> = ({
    children,
    className = '',
    align = 'left'
}) => {
    return (
        <StyledTD className={className}>
            <StyledTDContent $align={align}>
                {children}
            </StyledTDContent>
        </StyledTD>
    )
}

const StyledTD = styled.td`
    /* padding: 0.5rem 0.5rem; */
    font-size: 0.8em;
    color: ${ColorScheme.textDark};
    border-bottom: 1px solid ${ColorScheme.textDarkTint.tint80};
`
type TTDContentProps = {
    $align?: 'left' | 'center' | 'right'
}

const StyledTDContent = styled.div<TTDContentProps>`
    width: 100%;
    text-align: ${({ $align }) => $align ? $align : 'left'};
    padding: 0.5rem 0.75rem;
`