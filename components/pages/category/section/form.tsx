import React, { useState } from 'react'
import styled from 'styled-components'
import InputText from '@/components/input/text/text.validator'
import InputDropzone from '@/components/input/dropzone'
import {
    CategoriesState,
    SetEntity
} from '@/redux/categories/slice'
import { createNewCategory } from '@/redux/categories/action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const CategorySectionForm: React.FC = () => {
    const StateCategory = useAppSelector(CategoriesState)
    const dispatch = useAppDispatch()
    const [icon, setIcon] = useState<File | null>(null)

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SetEntity({
            key: 'Name',
            value: e.currentTarget.value
        }))
    }

    const handleReceiveFiles = (files: File[]) => {
        if (files.length > 0) {
            setIcon(files[0])
        } else {
            setIcon(null)
        }
    }
    const handleSubmit = () => {
        dispatch(createNewCategory({icon}))
    }
    return (
        <Wrapper>
            <FormName
                label='Name'
                value={StateCategory.Entity.Name}
                validator=''
                placeholder='Category Name'
                onChange={handleChangeInput}
            />
            <InputDropzone onReceiveFiles={handleReceiveFiles} />
            <button onClick={handleSubmit}>cek</button>
        </Wrapper>
    )
}

export default CategorySectionForm

const Wrapper = styled.div`
    width: 100%;
`

const FormName = styled(InputText)`
    margin-bottom: 1rem;
`