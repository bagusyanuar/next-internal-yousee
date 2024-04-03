import React from 'react'
import ToastSuccess from './toast.success'
import { toast, Slide, Id } from "react-toastify"

interface IPropsToast {
    onClose?: () => void
    timeToClose?: number | false
}

function TOAST(content: React.ReactNode, {
    timeToClose,
    onClose = () => { }
}: IPropsToast) {
    return toast(content, {
        position: 'top-right',
        autoClose: timeToClose,
        transition: Slide,
        closeButton: false,
        className: 'custom-toast',
        bodyClassName: 'custom-toast-body',
        onClose
    })
}

export {
    TOAST,
    ToastSuccess,
}