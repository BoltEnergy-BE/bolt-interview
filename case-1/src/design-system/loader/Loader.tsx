import styles from './Loader.module.scss'
import { forwardRef } from 'react'
import { LoaderProps } from '@design-system/loader/types.ts'
import classNames from 'classnames'

const Loader = forwardRef<SVGSVGElement, LoaderProps>(({ size = 24, className }: LoaderProps, ref) => {
  return (
    <svg
      data-testid="loader"
      ref={ref}
      className={classNames(styles.svg, className)}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="loader"
        d="M16 16V8.11498C16 8.042 15.9681 7.97267 15.9127 7.92517L9.1627 2.13946C9.06908 2.05921 8.93092 2.05921 8.8373 2.13946L2.0873 7.92517C2.03189 7.97267 2 8.042 2 8.11498V15.75C2 15.8881 2.11193 16 2.25 16H29.75C29.8881 16 30 16.1119 30 16.25V23.885C30 23.958 29.9681 24.0273 29.9127 24.0748L23.1627 29.8605C23.0691 29.9408 22.9309 29.9408 22.8373 29.8605L16.0873 24.0748C16.0319 24.0273 16 23.958 16 23.885V16Z"
        stroke="currentcolor"
        strokeWidth="4"
      />
    </svg>
  )
})

Loader.displayName = 'Loader'

export default Loader
