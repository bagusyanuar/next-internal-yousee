import React, { useState } from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'

interface ITableProps {
  children: React.ReactNode
  className?: string
}

const Table: React.FC<ITableProps> = ({
  children,
  className = ''
}) => {
  return (
    <TableWrapper className={className}>
      {children}
    </TableWrapper>
  )
}

export default Table

const TableWrapper = styled.table`
    width: 100%;
    background: transparent;
`

interface ITHEADProps {
  children: React.ReactNode
}

export const THEAD: React.FC<ITHEADProps> = ({
  children
}) => {
  return (
    <StyledTHEAD>
      {children}
    </StyledTHEAD>
  )
}

const StyledTHEAD = styled.thead`
    border-bottom: 1px solid ${ColorScheme.textDarkTint.tint80};
    border-top: 1px solid ${ColorScheme.textDarkTint.tint80};
`

export type TTHSort = {
  key: string,
  defaultDirection: 'asc' | 'desc'
  onSort: (key: string, direction: 'asc' | 'desc') => void
}

interface ITHProps {
  children: React.ReactNode
  className?: string
  width?: string
  align?: 'left' | 'center' | 'right'
  sort?: TTHSort
}

export const TH: React.FC<ITHProps> = ({
  children,
  className = '',
  width,
  align = 'left',
  sort
}) => {

  const [direction, setDirection] = useState<'asc' | 'desc'>(sort ? sort.defaultDirection : 'asc')

  const handleSort = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    switch (direction) {
      case 'asc':
        if (sort) {
          setDirection('desc')
          sort.onSort(sort.key, 'desc')
        }
        break;
      case 'desc':
        if (sort) {
          setDirection('asc')
          sort.onSort(sort.key, 'asc')
        }
        break;
      default:
        break;
    }
  }
  return (
    <StyledTH
      $width={width}
      className={className}
    >
      <StyledTHContent $align={align}>
        <span>{children}</span>
        {
          sort !== undefined ? <a href='#' onClick={handleSort}>
            <i className='bx bx-sort-alt-2'></i>
          </a> : <></>
        }
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

