'use client'

import React, { CSSProperties, useCallback, useMemo, useState, useEffect, useId } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Label from '@/components/input/label'
import RequiredLabel from '@/components/input/label/label.required'
import { useDropzone, FileRejection, DropEvent, DropzoneInputProps, DropzoneRootProps } from 'react-dropzone'
import { ColorScheme } from '@/components/color'

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
} from './dropzone.style'

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

const InputFileDropzoneIcon: React.FC<IProps> = ({
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

    const onRemoveFile = (files: Array<TFileContent>) => {
        setFiles(files)
    }

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.Preview));
    }, [files]);

    return (
        <div className={`${className}`}>
            <DropzoneWrapper
                $isFocused={isFocused}
                $isDragAccept={isDragAccept}
                $isDragReject={isDragReject}
                {...getRootProps()}>
                <input id={id || inputID} {...getInputProps()} />
                <Thumbnail files={files} onRemoveFile={onRemoveFile} />
            </DropzoneWrapper>
        </div>
    )
}

export default InputFileDropzoneIcon

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
            <PlaceholderIcon>
                <i className='bx bx-plus'></i>
            </PlaceholderIcon>
        )
    }

    return (
        <ThumbnailWrapper>
            {
                files.map((file, k) => {
                    return <ThumbnailImage key={k}>
                        <ThumbnailRemover href='#' onClick={(e) => { handleRemoveFile(e, k) }}>
                            <i className='bx bx-x-circle'></i>
                        </ThumbnailRemover>
                        <ThumbnailImageInner>
                            <Image
                                alt='img-preview'
                                src={file.Preview}
                                priority
                                width={76}
                                height={76}
                                // Revoke data uri after image is loaded
                                onLoad={() => { URL.revokeObjectURL(file.Preview) }}
                            />
                        </ThumbnailImageInner>
                    </ThumbnailImage>
                })
            }

        </ThumbnailWrapper>
    )
}

const ThumbnailWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const ThumbnailImage = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    border: 1px solid #eaeaea;
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

const ThumbnailRemover = styled.a`
    position: absolute;
    right: -8px;
    top: -8px;
`

const generateColor = (isDragAccept: boolean, isDragReject: boolean, isFocused: boolean): string => {
    if (isDragAccept) {
        return '#00e676';
    } else if (isDragReject) {
        return '#ff1744';
    } else if (isFocused) {
        return '#2196f3';
    } else {
        return ColorScheme.textLight
    }
}

interface IDropzoneWrapperProps extends DropzoneRootProps {
    $isFocused: boolean
    $isDragAccept: boolean
    $isDragReject: boolean
}


const DropzoneWrapper = styled.div<IDropzoneWrapperProps>`
    cursor: pointer;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 2px;
    border-color: ${({ $isDragAccept, $isDragReject, $isFocused }) => generateColor($isDragAccept, $isDragReject, $isFocused)};
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border .24s ease-in-out;
    padding: 10px 10px;
`
const PlaceholderIcon = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
        font-size: 2em;
    }
`