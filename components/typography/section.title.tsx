import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'

interface IProps {
    text: string,
    className?: string
}
const SectionTitle: React.FC<IProps> = ({
    text,
    className
}) => {
    return (
        <StyledText className={className}>
            {text}
        </StyledText>
    )
}

export default SectionTitle

const StyledText = styled.p`
    color: ${ColorScheme.textDark};
    font-size: 1em;
    font-weight: 600;
`