import React from 'react'
import { Card } from '@/components/atoms/card'
import styled from 'styled-components'
import { CardPadding, ColorScheme } from '@/components/utils'
import { Table, TableHeader } from '@/components/atoms/table'

interface IProps { className?: string }
const ProjectTable: React.FC<IProps> = ({ className = '' }) => {
    return (
        <Wrapper className={className}>
            <HeadingTitle>Data Projects</HeadingTitle>
            <HeadingSubTitle>Recently Added Projects</HeadingSubTitle>
            <Table>
                <TableHeader
                    headers={[
                        {name: '#'},
                        {name: 'Name'}
                    ]}
                />
            </Table>
        </Wrapper>
    )
}

export default ProjectTable

const Wrapper = styled(Card)`
    width: 100%;
    padding: ${CardPadding.medium};
`

const HeadingTitle = styled.p`
    font-size: 1.25em;
    color: ${ColorScheme.textDark};
`

const HeadingSubTitle = styled.p`
    font-size: 0.8em;
    color: ${ColorScheme.textLight};
`