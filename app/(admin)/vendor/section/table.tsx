'use client'

import React, { useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
import TableServer, { TColumn } from '@/components/table/server'
import TableAction from './table.action'
import ModalConfirmation from '@/components/modal/modal.confirmation'
import type { Vendor } from '@/model/vendor'
import { ClientPath } from '@/lib/path'

import {
  VendorState,
  SetModalConfirmation,
  SetPerPage,
  SetQuery
} from '@/redux/vendor/slice'
import { FindAll } from '@/redux/vendor/action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const Datatable: React.FC = () => {
  const router = useRouter()
  const vendorState = useAppSelector(VendorState)
  const dispatch = useAppDispatch()

  const Columns: Array<TColumn<Vendor>> = [
    {
      title: '#',
      selector: (row, index) => (index + 1),
      align: 'center',
      width: '4rem'
    },
    {
      title: 'Name',
      selector: (row) => row.Name,
      sort: true,
    },
    {
      title: 'Brand',
      selector: (row) => row.Brand,
      sort: true,
      width: '10rem',
    },
    {
      title: 'Phone',
      selector: (row) => row.Phone,
      align: 'center',
      width: '8rem',
    },
    {
      title: 'Action',
      align: 'center',
      width: '10rem',
      selector: (row) => {
        return <TableAction
          onDelete={() => { handleDelete(row.ID) }}
          onEdit={() => { handleEdit(row.ID) }}
          onDetail={() => { handleEdit(row.ID) }}
        />
      }
    },
  ]

  const handleDelete = (vendorID: number) => {
    dispatch(SetModalConfirmation(true))
  }

  const handleEdit = (vendorID: number) => {
    const url: string = `${ClientPath.vendor.index}/${vendorID}`
    router.push(url)
  }

  const handleSort = (key: string, direction: 'asc' | 'desc') => {
    // dispatch(FindAll())
  }

  const handleChangePerPage = (perPage: number) => {
    dispatch(SetPerPage(perPage))
  }

  const handleSearch = () => {
    // dispatch(FindAll())
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(debounce(handleSearch, 1500), [])

  const initialPage = useCallback(() => {
    dispatch(FindAll())
  }, [dispatch])

  useEffect(() => {
    initialPage()
    return () => { }
  }, [initialPage])

  return (
    <Wrapper>
      <TableServer
        onProcess={vendorState.LoadingData}
        columns={Columns}
        data={vendorState.Vendors}
        pageLength={vendorState.Pagination.PageLength}
        perPage={vendorState.Pagination.PerPage}
        page={vendorState.Pagination.Page}
        totalPage={vendorState.Pagination.TotalPage}
        totalRows={vendorState.Pagination.Rows}
        onPerpageChange={handleChangePerPage}
        onPageChange={(page) => { }}
        onSort={handleSort}
        search={{
          value: vendorState.Query,
          onSearch: (value: string) => {
            dispatch(SetQuery(value))
            // debounceSearch()
          },
          placeholder: 'search vendor...'
        }}
      />
      <ModalConfirmation
        open={vendorState.ModalConfirmation}
        text='Are you sure to delete vendor?'
        type='delete'
        onAccept={() => { }}
        onDenied={() => {
          dispatch(SetModalConfirmation(false))
        }}
        onBackdropClick={() => {
          dispatch(SetModalConfirmation(false))
        }}
      />
    </Wrapper>
  )
}

export default Datatable

const Wrapper = styled.div`
    width: 100%;
    margin-top: 1rem;
`