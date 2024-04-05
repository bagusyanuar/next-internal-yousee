import React, { CSSProperties, useCallback, useMemo, useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import { ColorScheme } from '@/components/color'
// import 'react-dropzone/examples/theme.css'

interface IProps {
    onReceiveFiles: (files: File[]) => void
    className?: string
}

type TFileContent = {
    File: File
    Preview: string
}
const Dropzone: React.FC<IProps> = ({
    onReceiveFiles,
    className = ''
}) => {
    const [files, setFiles] = useState<Array<TFileContent>>([]);

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

    const {
        getRootProps,
        getInputProps,
        isDragAccept,
        isFocused,
        isDragReject
    } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop
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
        <div className={`container ${className}`}>
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <Thumbnail files={files} onRemoveFile={onRemoveFile} />
            </div>
        </div>
    )
}

export default Dropzone

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

const PlaceholderText = styled.p`
    text-align: center;
`

const baseStyle: CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: ColorScheme.textLight,
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    minHeight: '10rem',
    paddingTop: '10px',
    paddingBottom: '10px'
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const thumbsContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
}

const thumb: CSSProperties = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
    position: 'relative'
};

const thumRemover: CSSProperties = {
    position: 'absolute',
    right: 0,
    top: 0
}

const thumbInner: CSSProperties = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img: CSSProperties = {
    display: 'block',
    width: 'auto',
    height: '100%'
};