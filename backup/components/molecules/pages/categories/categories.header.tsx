import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '@/components/atoms/typography'
import { ButtonADD } from '@/components/atoms/form/button'

interface IProps {
    className?: string
}

const CategoriesHeader: React.FC<IProps> = ({
    className = ''
}) => {
    return (
        <Wrapper>
            <SectionTitle text='Categories Data' />
            <ButtonADD onClick={() => { }} />
        </Wrapper>
    )
}

export default CategoriesHeader

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`