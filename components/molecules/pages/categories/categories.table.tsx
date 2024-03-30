import { TH, TR, TD, TableLength, TablePagination } from '@/components/atoms/table'
import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
    CategoriesState,
    SetPerPage,
} from '@/redux/categories/slice'

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
    return (
        <Wrapper className={className}>
            <TableLength
                lengths={StateCategories.Pagination.PageLength}
                value={StateCategories.Pagination.PerPage}
                onChange={handleChangePerPage}
            />
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
                    <TR>
                        <TD>No.</TD>
                        <TD>icon</TD>
                        <TD>Name</TD>
                        <TD>Action</TD>
                    </TR>
                </tbody>
            </TableWrapper>
            <TablePagination page={2} totalPage={5} totalRows={120} />
        </Wrapper>
    )
}

export default CategoriesTable

const Wrapper = styled.div`
    width: 100%;
`

const TableWrapper = styled.table`
    width: 100%;
`