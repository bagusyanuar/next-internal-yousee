import React from 'react'
import styled from 'styled-components'
import { CardInformation } from '@/components/molecules/dashboard'

interface IProps { className?: string }
const CardInformations: React.FC<IProps> = ({ className = '' }) => {
    return (
        <Wrapper className={className}>
            <CardInformation
                title='Product'
                total={2500}
                icon='bx bx-briefcase'
            />
            <CardInformation
                title='Vendor'
                total={150}
                icon='bx bx-network-chart'
            />
            <CardInformation
                title='Project'
                total={74}
                icon='bx bx-receipt'
            />
            <CardInformation
                title='Cities'
                total={15}
                icon='bx bx-buildings'
            />
        </Wrapper>
    )
}

export default CardInformations

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
`