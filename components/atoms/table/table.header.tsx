import React from 'react'
import { THeader } from './index'
import styled from 'styled-components'

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
            {headers.map((v, k) => {
                return <th key={k}>{v.name}</th>
            })}
        </Wrapper>
    )
}

export default TableHeader

const Wrapper = styled.thead`
    width: 100%;
`