import React, { useState } from 'react'
import styled from 'styled-components'
import InputText from '@/components/input/text/text.validator'
import FormIcon from '@/components/input/dropzone'
import Label from '@/components/input/label'
import ButtonLoading from '@/components/button/button.loading'

import {
    CategoriesState,
    SetEntity,
    SetLoadingSave
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
        dispatch(SetLoadingSave(true))
        setTimeout(() => {
            dispatch(SetLoadingSave(false))
        }, 2000);
        // dispatch(createNewCategory({ icon }))
    }
    return (
        <Wrapper>
            <FormName
                label='Category Name'
                value={StateCategory.Entity.Name}
                validator=''
                placeholder='Category Name'
                onChange={handleChangeInput}
            />
            <Label>Category Icon</Label>
            <FormIcon onReceiveFiles={handleReceiveFiles} />
            <hr />
            <ActionWrapper>
                <ButtonLoading
                    onLoading={StateCategory.LoadingSave}
                    onClick={handleSubmit}>
                    <ButtonContent>
                        <i className='bx bx-check'></i>
                        <span>Save</span>
                    </ButtonContent>
                </ButtonLoading>
            </ActionWrapper>
            {/* <Backdrop /> */}
        </Wrapper>
    )
}

export default CategorySectionForm

// const Backdrop = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100vh;
//     background-color: rgba(0, 0, 0, 0.3);
// `
const Wrapper = styled.div`
    width: 100%;
    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`

const FormName = styled(InputText)`
    margin-bottom: 1rem;
`

const ActionWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`

const ButtonContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        margin-right: 0.25rem;
    }
`