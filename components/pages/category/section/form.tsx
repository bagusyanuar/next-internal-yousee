import React from 'react'
import styled from 'styled-components'
import InputText from '@/components/input/text/text.validator'
import {
    CategoriesState,
    SetEntity
} from '@/redux/categories/slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const CategorySectionForm: React.FC = () => {
    const StateCategory = useAppSelector(CategoriesState)
    const dispatch = useAppDispatch()

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SetEntity({
            key: 'Name',
            value: e.currentTarget.value
        }))
    }

    const handleSubmit = () => {
        let form: FormData = new FormData()
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