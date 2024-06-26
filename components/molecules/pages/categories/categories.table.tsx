import { TH, TR, TD, TableLength, TablePagination, TableSearchText } from '@/components/atoms/table'
import React, { useCallback, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
    CategoriesState,
    SetPerPage,
    SetPage,
    SetQuery
} from '@/redux/categories/slice'
import { getCategoriesData } from '@/redux/categories/action'
import { ColorScheme } from '@/components/utils'

interface IProps {
    className?: string
}

const CategoriesTable: React.FC<IProps> = ({
    className = ''
}) => {
    const StateCategories = useAppSelector(CategoriesState)
    const dispatch = useAppDispatch()

    const handleChangePerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const perPage: number = parseInt(e.currentTarget.value)
        dispatch(SetPerPage(perPage))
    }

    const handleChangePage = (page: number) => {
        dispatch(SetPage(page))
    }

    const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SetQuery(e.currentTarget.value))
    }

    const initialPage = useCallback(() => {
        dispatch(getCategoriesData())
    }, [dispatch])

    useEffect(() => {
        initialPage()
        return () => { }
    }, [initialPage])


    return (
        <Wrapper className={className}>
            <div className='flex items-center justify-between'>
                <TableLength
                    lengths={StateCategories.Pagination.PageLength}
                    value={StateCategories.Pagination.PerPage}
                    onChange={handleChangePerPage}
                />
                <div className='w-1/5'>
                    <TableSearchText
                        value={StateCategories.Query}
                        onChange={handleChangeQuery}
                        placeholder='search...'
                        className='mb-3'
                    />
                </div>

            </div>

            <TableWrapper>
                <thead>
                    <TR>
                        <TH width='4rem' align='center'>No.</TH>
                        <TH width='8rem' align='center'>Icon</TH>
                        <TH>Name</TH>
                        <TH width='12rem' align='center'>Action</TH>
                    </TR>
                </thead>
                <tbody>
                    {
                        StateCategories.Categories.map((v, k) => {
                            return <TR key={k}>
                                <TD align='center'>{(k + 1)}</TD>
                                <TD>
                                    <ImageWrapper>
                                        <Image src={v.Icon} width={50} height={100} alt='brand-image' priority />
                                    </ImageWrapper>
                                </TD>
                                <TD>{v.Name}</TD>
                                <TD align='center'>-</TD>
                            </TR>
                        })
                    }

                </tbody>
            </TableWrapper>
            <TablePagination
                page={StateCategories.Pagination.Page}
                totalPage={3}
                totalRows={120}
                onPageChange={handleChangePage}
            />
        </Wrapper>
    )
}

export default CategoriesTable

const Wrapper = styled.div`
    width: 100%;

    thead {
        border-bottom: 1px solid ${ColorScheme.textDarkTint.tint80};
        border-top: 1px solid ${ColorScheme.textDarkTint.tint80};
    }
`
const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const TableWrapper = styled.table`
    width: 100%;
`