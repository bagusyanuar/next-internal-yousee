import React from 'react'
import styled from 'styled-components'

interface IProps {
    width: string
    height: string
}
const Shimmer: React.FC<IProps> = ({
    width,
    height
}) => {
    return (
        <Wrapper>
            <Content
                $width={width}
                $height={height}
                className='bg-gray-300 animate-pulse'
            />
        </Wrapper>
    )
}

export default Shimmer

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Content = styled.div<{ $width: string, $height: string }>`
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    border-radius: 5px;
`