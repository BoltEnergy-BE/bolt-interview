import { toast } from 'react-toastify'
import Toast from './Toast.tsx'

export const popSuccessToast = (text: string) => {
  toast.success((props) => <Toast {...props}>{text}</Toast>)
}

export const popErrorToast = (text: string) => {
  toast.error((props) => <Toast {...props}>{text}</Toast>)
}
