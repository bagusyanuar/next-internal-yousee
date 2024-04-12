import React, { useState } from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'
import { TSORT, TSortDirectionOption } from '../type'

interface IProps {
    children: React.ReactNode
    className?: string
    width?: string
    align?: 'left' | 'center' | 'right'
    sort?: TSORT
    scroll?: boolean
}

const TH: React.FC<IProps> = ({
    children,
    className = '',
    width,
    align = 'left',
    sort,
    scroll = false
}) => {
    const [direction, setDirection] = useState<TSortDirectionOption>(sort ? sort.defaultDirection : 'asc')

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
            $scroll={scroll}
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

export default TH

type TStyledTHProps = {
    $width?: string
    $scroll?: boolean
}

const generateWidth = ({ $width, $scroll }: TStyledTHProps): string => {
    if ($width === undefined || $width === '') {
        return 'width: auto;'
    }

    if (!$scroll) {
        return `width: ${$width};`
    }
    return `min-width: ${$width};`
}
const StyledTH = styled.th<TStyledTHProps>`
    font-size: 0.8em;
    font-weight: 600;
    color: ${ColorScheme.textDark};
    ${generateWidth}
  `

type TStyledTHContentProps = {
    $align?: 'left' | 'center' | 'right'
}

const StyledTHContent = styled.div<TStyledTHContentProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    span {
        width: 100%;
        text-align: ${({ $align }) => $align ? $align : 'left'};
        padding: 0.5rem 0.75rem;
    }
  `