import React from 'react'
import styled, { keyframes } from 'styled-components'

const TableLengthShimmer = () => {
    return (
        <Wrapper>
            <Shimmer className='bg-gray-300 animate-pulse'>
            </Shimmer>
        </Wrapper>
    )
}

export default TableLengthShimmer

const ShimmerAnimation = keyframes`
    from {background-position: 200% 0};
    to {background-position: -200% 0;}
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Shimmer = styled.div`
    width: 11rem;
    height: 1.5rem;
    border-radius: 5px;
`