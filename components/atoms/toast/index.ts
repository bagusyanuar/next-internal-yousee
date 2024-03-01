import ToastSuccessLogin from './toast.success.login'
import { toast, Slide } from "react-toastify";
const TOAST = {
    success: function (text: string, onClose?: () => void) {
        toast(ToastSuccessLogin({ text },), {
            position: 'top-right',
            onClose: onClose,
            autoClose: 1000,
            transition: Slide,
            closeButton: false,
            className: 'success-toast',
            bodyClassName: 'success-toast-body'
        })
    }
}
export {
    ToastSuccessLogin,
    TOAST
}