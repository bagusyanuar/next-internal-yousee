import React from 'react'
import { THeader } from './index'
import styled from 'styled-components'
import { ColorScheme } from '@/components/utils'

interface IProps {
    headers: Array<THeader>
    className?: string
}
const TableHeader: React.FC<IProps> = ({
    headers,
    className
}) => {
    return (
        <Wrapper className={className}>
            <tr>
                {headers.map((v, k) => {
                    return <StyledHeader
                        key={k}
                        $width={v.width}
                    >
                        <ColumnWrapper $align={v.align}>
                            {v.name}
                        </ColumnWrapper>
                    </StyledHeader>
                })}
            </tr>
        </Wrapper>
    )
}

export default TableHeader

const Wrapper = styled.thead`
    width: 100%;
    border-bottom: 1px solid ${ColorScheme.textDarkTint.tint80};
`

type TTHProps = {
    $width?: string

}
const StyledHeader = styled.th<TTHProps>`
    font-size: 0.8em;
    font-weight: 600;
    color: ${ColorScheme.textDark};
    width: ${({ $width }) => $width ? $width : 'auto'};
`

type TColumn = {
    $align?: 'left' | 'center' | 'right'
}

const ColumnWrapper = styled.div<TColumn>`
    width: 100%;
    text-align: ${({ $align }) => $align ? $align : 'left'};
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
`