import { ColorScheme } from '@/components/utils'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

interface IProps {
    page: number
    totalPage: number
    totalRows: number
}

const TablePagination: React.FC<IProps> = ({
    page,
    totalPage,
    totalRows
}) => {
    const [pages, setPages] = useState<Array<number>>([])

    useEffect(() => {
        const arrayPages: Array<number> = Array.from({ length: totalPage }, (v, k) => (k + 1))
        setPages(arrayPages);
        return () => {
            setPages([])
        }
    }, [totalPage])


    return (
        <Wrapper>
            <Information>
                <span>{`Showing page ${page} of ${totalPage} from ${totalRows} rows`}</span>
            </Information>
            <PageSelect className='-space-x-px'>
                <li>
                    <a href='#' className='page-select-item first'>
                        <i className='bx bx-chevrons-left'></i>
                    </a>
                </li>
                <li>
                    <a href='#' className='page-select-item'>
                        <i className='bx bx-chevron-left'></i>
                    </a>
                </li>
                {
                    pages.map((v, k) => {
                        return <li key={k}>
                            <a href='#' className={`page-select-item ${page === v ? 'selected' : ''}`}>
                                {v}
                            </a>
                        </li>
                    })
                }
                <li>
                    <a href='#' className='page-select-item'>
                        <i className='bx bx-chevron-right'></i>
                    </a>
                </li>
                <li>
                    <a href='#' className='page-select-item last'>
                        <i className='bx bx-chevrons-right'></i>
                    </a>
                </li>
            </PageSelect>
        </Wrapper>
    )
}

export default TablePagination

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.75rem;
`

const Information = styled.div`
    display: flex;
    align-items: center;

    span {
        font-size: 0.8em;
        color: ${ColorScheme.textDark};
    }
`

const PageSelect = styled.ul`
    display: inline-flex;
    align-items: center;

    .page-select-item {
        font-size: 0.8em;
        background-color: white;
        color: ${ColorScheme.textDark};
        padding: 0.25rem 0.5rem;
        border: 1px solid ${ColorScheme.textDarkTint.tint80};
        transition: all ease-in-out 200ms;

        &:hover {
            background-color: ${ColorScheme.primary};
            color: white;
            border: 1px solid ${ColorScheme.primary};
        }

        &.first {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        
        &.last {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
        
        &.selected {
            background-color: ${ColorScheme.primary};
            color: white;
            border: 1px solid ${ColorScheme.primary};
        }
    }
`