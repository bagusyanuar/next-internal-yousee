import { ColorScheme } from '@/components/utils'
import React from 'react'
import styled from 'styled-components'

interface IProps {
  children: React.ReactNode
  className?: string
}
const TableBody: React.FC<IProps> = ({
  children,
  className = ''
}) => {
  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  )
}

export default TableBody

const Wrapper = styled.tr`
  width: 100%;
  border-bottom: 1px solid ${ColorScheme.textDarkTint.tint80};
`