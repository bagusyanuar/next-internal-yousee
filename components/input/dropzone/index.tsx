import React, { CSSProperties, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { DropzoneRootProps, DropzoneState, useDropzone } from 'react-dropzone'
import { ColorScheme } from '@/components/color'
// import 'react-dropzone/examples/theme.css'

interface IProps {
    onReceiveFiles: (files: File[]) => void
}

const baseStyle: CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: ColorScheme.textLight,
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
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

const Dropzone: React.FC<IProps> = ({
    onReceiveFiles
}) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        onReceiveFiles(acceptedFiles)
    }, [onReceiveFiles])

    const {
        getRootProps,
        getInputProps,
        isDragAccept,
        isFocused,
        isDragReject
    } = useDropzone({ onDrop })

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
    return (
        <div className="container">
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>Drag `n` drop some files here, or click to select files</p>
            </div>
        </div>
    )
}

export default Dropzone