import { ToastContainer as ReactToastContainer, ToastContainerProps } from 'react-toastify'
import styles from './Toast.module.scss'
import classNames from 'classnames'

const ToastContainer = (props: ToastContainerProps) => {
  return (
    <ReactToastContainer
      {...props}
      closeButton={false}
      hideProgressBar
      className={classNames(styles['toast-container'], props.className)}
      toastClassName={classNames(styles['toast-wrapper'], props.toastClassName)}
      position="bottom-center"
      icon={false}
    />
  )
}

export default ToastContainer
