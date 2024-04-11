'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import InputText from '@/components/input/text/group/validator'
import InputFile from '@/components/input/file/dropzone.icon'
import Label from '@/components/input/label'
import Divider from '@/components/divider'
import ButtonSubmit from '@/components/button/button.submit'
import ModalConfirmation from '@/components/modal/modal.confirmation'

import {
    CategoriesState,
    SetEntity,
    SetLoadingSave,
    SetModalConfirmation
} from '@/redux/categories/slice'
import { createNewCategory } from '@/redux/categories/action'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { ColorScheme } from '@/components/color'
import { InputRadius } from '@/components/utils'

const Form: React.FC = () => {
    const StateCategory = useAppSelector(CategoriesState)
    const dispatch = useAppDispatch()
    const [icon, setIcon] = useState<File | null>(null)

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SetEntity({
            key: 'Name',
            value: e.currentTarget.value
        }))
    }

    const onReceiveFiles = (files: File[]) => {
        if (files.length > 0) {
            setIcon(files[0])
        } else {
            setIcon(null)
        }
    }

    const onSubmit = () => {
        dispatch(SetModalConfirmation(true))
    }

    const handleSubmit = () => {
        dispatch(SetModalConfirmation(false))
        dispatch(SetLoadingSave(true))
        setTimeout(() => {
            dispatch(SetLoadingSave(false))
        }, 3500);
    }

    const onCancelSubmit = () => {
        dispatch(SetModalConfirmation(false))
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
                    onChange={onChangeInput}
                    disabled={StateCategory.LoadingSave}
                />
                <FormGroupIconWrapper>
                    <Label>Category Icon</Label>
                    <FormIconWrapper>
                        <InputFile
                            onReceiveFiles={onReceiveFiles}
                            label='Category Icon'
                            multiple={false}
                            maxSize={1000000}
                            disabled={StateCategory.LoadingSave}
                        />
                    </FormIconWrapper>
                </FormGroupIconWrapper>

            </FormWrapper>
            <Divider />
            <ActionWrapper>
                <ButtonSubmit
                    onLoading={StateCategory.LoadingSave}
                    onSubmit={onSubmit}
                />
            </ActionWrapper>
            <ModalConfirmation
                open={StateCategory.ModalConfirmation}
                text='Are you sure to create new category?'
                onAccept={handleSubmit}
                onDenied={onCancelSubmit}
            />
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

const FormGroupIconWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const FormIconWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: 1px solid ${ColorScheme.textLight};
    padding: 1rem 1rem;
    border-radius: ${InputRadius.small};
`

const ActionWrapper = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
`