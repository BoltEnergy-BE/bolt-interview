import styles from './Toast.module.scss'
import { ToastContentProps } from 'react-toastify'
import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { Icon } from '@design-system/icon'

const Toast = ({ toastProps, children }: PropsWithChildren<ToastContentProps>) => {
  // Constants
  const isError = toastProps.type === 'error'

  return (
    <div className={classNames(styles.toast, { [styles.error]: isError })}>
      <Icon size={20} name={isError ? 'cross' : 'check'} className={styles.icon} />
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  )
}

export default Toast
