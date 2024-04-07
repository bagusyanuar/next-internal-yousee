'use client'

import React from 'react'
import TablePagination from '@/components/table/table.pagination'

const Pagination: React.FC = () => {
  return (
    <TablePagination 
        onPageChange={(page) => {}}
        page={1}
        totalPage={3}
        totalRows={100}
    />
  )
}

export default Pagination