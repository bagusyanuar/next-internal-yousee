import React from 'react'
import styled from 'styled-components'
import { CardPadding, CardRadius, CardShadow } from '@/components/utils'

const Card: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ children, ...props }) => {
    return (
        <StyledCard {...props}>
            {children}
        </StyledCard>
    )
}

export default Card

const StyledCard = styled.div`
    background-color: white;
    padding: ${CardPadding.small};
    border-radius: ${CardRadius.medium};
    width: fit-content;
    height: fit-content;
    box-shadow: ${CardShadow.small};
`