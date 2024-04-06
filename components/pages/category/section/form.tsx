import React, { useState } from 'react'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify';
import InputText from '@/components/input/text/text.validator'
import FormIcon from '@/components/input/dropzone'
import Label from '@/components/input/label'
import ButtonLoading from '@/components/button/button.loading'
import ModalConfirmation from '@/components/modal/modal.confirmation'
import { TOAST, ToastSuccess, ToastError } from '@/components/toast'
import { APIResponse } from '@/lib/jsonResponse'


import {
    CategoriesState,
    SetEntity,
    SetLoadingSave,
    SetModalConfirmation
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

    const handleConfirmCreate = () => {
        dispatch(SetModalConfirmation(true))
    }

    const handleSubmit = () => {
        dispatch(createNewCategory({ icon })).then(response => {
            const payload: APIResponse = response.payload as APIResponse
            switch (payload.code) {
                case 200:
                    TOAST(<ToastSuccess text={payload.message} />, {
                        timeToClose: 1000,
                        onClose: () => {}
                    })
                    break;
                default:
                    TOAST(<ToastError text={payload.message} />, {
                        timeToClose: 2000,
                    })
                    break;
            }
        })
    }

    const handleCancelSubmit = () => {
        dispatch(SetModalConfirmation(false))
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
            <FormIcon
                onReceiveFiles={handleReceiveFiles}
                multiple={false}
                maxSize={1000000}
            />
            <hr />
            <ActionWrapper>
                <ButtonLoading
                    onLoading={StateCategory.LoadingSave}
                    onClick={handleConfirmCreate}>
                    <ButtonContent>
                        <i className='bx bx-check'></i>
                        <span>Save</span>
                    </ButtonContent>
                </ButtonLoading>
            </ActionWrapper>
            <ModalConfirmation
                open={StateCategory.ModalConfirmation}
                text='Are you sure to create new category?'
                onAccept={handleSubmit}
                onDenied={handleCancelSubmit}
            />
            <ToastContainer
                hideProgressBar
            />
        </Wrapper>
    )
}

export default CategorySectionForm


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