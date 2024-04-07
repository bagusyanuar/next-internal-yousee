'use client'

import React from 'react'
import styled from 'styled-components'

interface IProps { className?: string }
const Divider: React.FC<IProps> = ({ className = '' }) => {
    return (
        <StyledHR className={className} />
    )
}

export default Divider

const StyledHR = styled.hr`
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 100%;
`