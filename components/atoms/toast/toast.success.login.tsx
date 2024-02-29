import React from 'react'
import { ToastContentProps } from 'react-toastify'

interface IProps { text?: string }
const ToastSuccessLogin = ({ closeToast, toastProps, text = '' }: Partial<ToastContentProps> & IProps) => {
  return (
    <div>{text}</div>
  )
}

export default ToastSuccessLogin