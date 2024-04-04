import React, { useState } from 'react'
import styled from 'styled-components'
import TABLE, { THEAD, TD, TH } from '@/components/table'
import TableLength from '@/components/table/table.length'
import TablePagination from '@/components/table/table.pagination'
import Shimmer from '@/components/shimmer'


const CategorySectionTable: React.FC = () => {
    const [columnNameDirection, setColumnNameDirection] = useState<'asc' | 'desc'>('asc')


    return (
        <Wrapper>
            <HeaderWrapper>
                {/* <TableLength
                    length={[10, 25, 50]}
                    value={10}
                    onChange={() => { }}
                /> */}
                 <Shimmer width='10rem' height='1.5rem' />
                 <Shimmer width='11rem' height='2rem' />
            </HeaderWrapper>
            {
                [1, 2, 3, 4, 5, 6].map((v, k) => {
                    return <Shimmer key={k} width='100%' height='2.5rem' />
                })
            }
            {/* <TABLE>
                <THEAD>
                    <tr>
                        <TH width='4rem' align='center'>No.</TH>
                        <TH width='8rem' align='center'>Icon</TH>
                        <TH sort={{
                            key: 'name',
                            defaultDirection: columnNameDirection,
                            onSort: (direction) => {
                                setColumnNameDirection(direction)
                                console.log(columnNameDirection);
                            }
                        }}>Name</TH>
                        <TH width='12rem' align='center'>Action</TH>
                    </tr>
                </THEAD>
                <tbody>

                </tbody>
            </TABLE> */}
            <TablePagination
                page={1}
                totalPage={5}
                totalRows={100}
                onPageChange={(page: number) => { }}
            />
        </Wrapper>
    )
}

export default CategorySectionTable

const Wrapper = styled.div`
    width: 100%;
    margin-top: 1rem;
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
`