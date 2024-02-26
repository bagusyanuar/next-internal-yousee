import { ColorScheme } from '@/components/utils'
import React from 'react'
import styled from 'styled-components'
import { CardCategory } from '@/components/molecules/dashboard'
import { Link } from '@/components/atoms/link'

interface IProps { className?: string }
const CardCategories: React.FC<IProps> = ({ className = '' }) => {
    return (
        <Wrapper className={className}>
            <HeadingTitle>Categories</HeadingTitle>
            <SubTitleWrapper>
                <HeadingSubTitle>All Products Category</HeadingSubTitle>
                <Link to='#' text='See All' />
            </SubTitleWrapper>

            <CategoriesWrapper>
                <CardCategory icon='/assets/static/baliho.png' title='Baliho' total={40} />
                <CardCategory icon='/assets/static/billboard.png' title='Billboard' total={120} />
                <CardCategory icon='/assets/static/videotron.png' title='Videotron' total={57} />
                <CardCategory icon='/assets/static/led-banner.png' title='Led Banner' total={10} />
            </CategoriesWrapper>
        </Wrapper>
    )
}

export default CardCategories

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const HeadingTitle = styled.p`
    font-size: 1.25em;
    color: ${ColorScheme.textDark};
`

const HeadingSubTitle = styled.p`
    font-size: 0.8em;
    color: ${ColorScheme.textLight};
`

const SubTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`

const CategoriesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`