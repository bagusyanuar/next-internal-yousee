'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
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
import { Category } from '@/model/category'
import { ColorScheme } from '@/components/color'
import NoImageIcon from '@/public/assets/static/no-image.png'
import { InputRadius } from '@/components/utils'

interface IProps {
    category: Category
}

const Form: React.FC<IProps> = ({
    category
}) => {
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

    const initialPage = useCallback(() => {
        dispatch(SetEntity({ key: 'Name', value: category.Name }))
    }, [category, dispatch])

    useEffect(() => {
        initialPage()
        return () => { }
    }, [initialPage])


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
                        <IconWrapper>
                            <ThumbnailWrapper>
                                <ThumbnailImageInner>
                                    <Image
                                        alt='img-preview'
                                        src={category.Icon ?? NoImageIcon}
                                        priority
                                        width={76}
                                        height={76}
                                    />
                                </ThumbnailImageInner>
                            </ThumbnailWrapper>
                        </IconWrapper>
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

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
    border: 2px solid ${ColorScheme.textLight};
    border-radius: 2px;
`

const ThumbnailWrapper = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    width: 80px;
    height: 80px;
    padding: 4px;
    box-sizing: border-box;
    position: relative;
`
const ThumbnailImageInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 0;
    overflow: hidden;

    img {
        display: block;
        width: auto;
        height: 100%;
    }
`

const ActionWrapper = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
`