'use client'

import React, { CSSProperties, useCallback, useMemo, useState, useEffect, useId } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Label from '@/components/input/label'
import RequiredLabel from '@/components/input/label/label.required'
import { useDropzone, FileRejection, DropEvent, DropzoneInputProps, DropzoneRootProps } from 'react-dropzone'
import {
    baseStyle,
    acceptStyle,
    focusedStyle,
    rejectStyle,
    img,
    thumRemover,
    thumb,
    thumbInner,
    thumbsContainer
} from '../dropzone.style'

interface IProps {
    onReceiveFiles: (files: File[]) => void
    id?: string
    label?: React.ReactNode
    maxSize?: number
    multiple?: boolean
    onRejectFiles?: (rejectionFiles: Array<FileRejection>) => void
    className?: string
    required?: boolean
    disabled?: boolean
}

type TFileContent = {
    File: File
    Preview: string
}

const InputFileGroupDropzone: React.FC<IProps> = ({
    onReceiveFiles,
    id,
    label,
    maxSize = 1000000,
    multiple = true,
    className = '',
    onRejectFiles = (rejectionFIles: Array<FileRejection>) => { },
    required = false,
    disabled = false
}) => {
    const [files, setFiles] = useState<Array<TFileContent>>([]);

    const inputID = `input-file-${useId()}`

    const onDrop = useCallback((acceptedFiles: File[]) => {
        onReceiveFiles(acceptedFiles)
        let tmpFiles: Array<TFileContent> = acceptedFiles.map((file) => {
            return {
                File: file,
                Preview: URL.createObjectURL(file)
            }
        })
        setFiles(tmpFiles)
    }, [onReceiveFiles])

    const onDropRejected = useCallback((fileRejections: FileRejection[], event: DropEvent) => {
        onRejectFiles(fileRejections)
    }, [onRejectFiles])

    const {
        getRootProps,
        getInputProps,
        isDragAccept,
        isFocused,
        isDragReject,
    } = useDropzone({
        accept: {
            'image/*': []
        },
        maxSize: maxSize,
        multiple: multiple,
        onDrop,
        onDropRejected,
        disabled: disabled
    })

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    const onRemoveFile = (files: Array<TFileContent>) => {
        setFiles(files)
    }

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.Preview));
    }, [files]);

    return (
        <Wrapper className={className}>
            {
                label ?
                    (
                        required ?
                            <RequiredLabel htmlFor={id || inputID}>{label}</RequiredLabel>
                            : <Label htmlFor={id || inputID}>{label}</Label>
                    )
                    : <></>
            }
            <div className={`container`}>
                <div {...getRootProps({ style })}>
                    <input id={id || inputID} {...getInputProps()} />
                    <Thumbnail files={files} onRemoveFile={onRemoveFile} />
                </div>
            </div>
        </Wrapper>
    )
}

export default InputFileGroupDropzone

interface IThumbnailProps {
    files: Array<TFileContent>
    onRemoveFile: (files: Array<TFileContent>) => void
}

const Thumbnail: React.FC<IThumbnailProps> = ({
    files,
    onRemoveFile,
}) => {

    const handleRemoveFile = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
        e.stopPropagation()
        e.preventDefault()
        let tmpFiles: Array<TFileContent> = [...files]
        tmpFiles.splice(index, 1)
        onRemoveFile(tmpFiles)
    }

    if (files.length <= 0) {
        return (
            <PlaceholderText>Drag `n` drop some files here, or click to select files</PlaceholderText>
        )
    }

    return (
        <div style={thumbsContainer}>
            {
                files.map((file, k) => {
                    return <div style={thumb} key={k}>
                        <a href='#' style={thumRemover} onClick={(e) => { handleRemoveFile(e, k) }}>
                            <i className='bx bx-x-circle'></i>
                        </a>
                        <div style={thumbInner}>
                            <Image
                                alt='img-preview'
                                src={file.Preview}
                                style={img}
                                width={100}
                                height={100}
                                // Revoke data uri after image is loaded
                                onLoad={() => { URL.revokeObjectURL(file.Preview) }}
                            />
                        </div>
                    </div>
                })
            }

        </div>
    )
}

const Wrapper = styled.div`
    width:  100%;
`
const PlaceholderText = styled.p`
    text-align: center;
`