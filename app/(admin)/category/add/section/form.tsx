'use client'

import React from 'react'
import styled from 'styled-components'
import InputText from '@/components/input/text/group/validator'
import InputFile from '@/components/input/file/group/dropzone'

import {
    CategoriesState,
    SetEntity,
    SetLoadingSave,
    SetModalConfirmation
} from '@/redux/categories/slice'
import { createNewCategory } from '@/redux/categories/action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const Form: React.FC = () => {
    const StateCategory = useAppSelector(CategoriesState)
    const dispatch = useAppDispatch()

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SetEntity({
            key: 'Name',
            value: e.currentTarget.value
        }))
    }

    return (
        <Wrapper>
            <FormWrapper>
                <InputText
                    value={StateCategory.Entity.Name}
                    validator=''
                    label='Category Name'
                    placeholder='Category Name'
                    required
                    onChange={handleChangeInput}
                />
                <InputFile 
                    onReceiveFiles={() => {}}
                    label='Category Icon'
                />
            </FormWrapper>
        </Wrapper>
    )
}

export default Form

const Wrapper = styled.div`
    width: 100%;
`
const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

`