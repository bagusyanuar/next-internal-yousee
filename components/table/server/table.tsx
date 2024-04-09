'use client'

import React from 'react'
import styled from 'styled-components'
import TABLE from './atoms/table'
import HEADER from './header'
import THEAD from './atoms/thead'
import TR from './atoms/tr'
import TH from './atoms/th'
import LoaderDots from '@/components/loader/loader.dots'

export type TColumn<T> = {
    title: string
    onSort: (arg: T) => void
}

interface IProps {
    onProcess: boolean
    loadingComponent?: React.ReactNode
}

const Table: React.FC<IProps> = ({

    onProcess,
    loadingComponent = <LoaderDots height='24rem' />
}) => {
    return (
        <Wrapper>
            {
                onProcess ?
                    loadingComponent
                    : <TABLE>
                        <THEAD>
                            <TR>
                                <TH>#</TH>
                                <TH>Name</TH>
                                <TH sort={{
                                    key: 'Action',
                                    defaultDirection: 'asc',
                                    onSort: (k, d) => {
                                        
                                    },

                                }}>Action</TH>
                            </TR>
                        </THEAD>
                    </TABLE>
            }
        </Wrapper>
    )
}

export default Table

const Wrapper = styled.div`
    width: 100%;

`