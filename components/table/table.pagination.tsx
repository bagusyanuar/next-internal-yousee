import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'

interface IProps {
    page: number
    totalPage: number
    totalRows: number
    onPageChange: (page: number) => void
}

const TablePagination: React.FC<IProps> = ({
    page,
    totalPage,
    totalRows,
    onPageChange
}) => {
    const [pages, setPages] = useState<Array<number>>([])

    useEffect(() => {
        const arrayPages: Array<number> = Array.from({ length: totalPage }, (v, k) => (k + 1))
        const indexOfCurrentPage: number = arrayPages.indexOf(page) + 1
        const startIndex: number = indexOfCurrentPage - 2
        const endIndex: number = indexOfCurrentPage + 3
        let shownPages: Array<number> = []
        for (let index = startIndex; index < endIndex; index++) {
            shownPages.push(index)
        }

        if (shownPages[0] < 1) {
            shownPages = arrayPages.slice(0, 5)
        }

        if (shownPages[4] > arrayPages.length) {
            if (arrayPages.length < 5) {
                shownPages = arrayPages
            } else {
                shownPages = arrayPages.slice(arrayPages.length - 5, arrayPages.length)
            }
        }

        setPages(shownPages);
        return () => {
            setPages([])
        }
    }, [page, totalPage])


    const handlePageChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        if (e.currentTarget.dataset.index) {
            switch (e.currentTarget.dataset.index) {
                case 'first':
                    onPageChange(1)
                    break;
                case 'previous':
                    if (page > 1) {
                        const p: number = page - 1
                        onPageChange(p)
                    }
                    break;
                case 'page':
                    if (e.currentTarget.dataset.page) {
                        const dataPage: number = parseInt(e.currentTarget.dataset.page)
                        onPageChange(dataPage)
                    }
                    break;
                case 'next':
                    if (page < totalPage) {
                        const p: number = page + 1
                        onPageChange(p)
                    }
                    break;
                case 'last':
                    onPageChange(totalPage)
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <Wrapper>
            <Information>
                <span>{`Showing page ${page} of ${totalPage} from ${totalRows} rows`}</span>
            </Information>
            <PageSelect className='-space-x-px'>
                <li>
                    <a href='#' onClick={handlePageChange} data-index="first" className='page-select-item first'>
                        <i className='bx bx-chevrons-left'></i>
                    </a>
                </li>
                <li>
                    <a href='#' onClick={handlePageChange} data-index="previous" className='page-select-item'>
                        <i className='bx bx-chevron-left'></i>
                    </a>
                </li>
                {
                    pages.map((v, k) => {
                        return <li key={k}>
                            <a href='#' onClick={handlePageChange} data-index="page" data-page={v} className={`page-select-item ${page === v ? 'selected' : ''}`}>
                                {v}
                            </a>
                        </li>
                    })
                }
                <li>
                    <a href='#' onClick={handlePageChange} data-index="next" className='page-select-item'>
                        <i className='bx bx-chevron-right'></i>
                    </a>
                </li>
                <li>
                    <a href='#' onClick={handlePageChange} data-index="last" className='page-select-item last'>
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