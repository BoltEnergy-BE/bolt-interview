import styles from '../button-link-base/ButtonLinkBase.module.scss'
import classNames from 'classnames'
import { ButtonProps } from './types.ts'
import { forwardRef } from 'react'
import ButtonLinkBase from '../button-link-base/ButtonLinkBase.tsx'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      active,
      children,
      className,
      destructive = false,
      disabled,
      trailingIcon,
      leadingIcon,
      representation = 'button',
      id,
      isFullwidth = false,
      isFullwidthMobile = false,
      loading = false,
      onClick,
      size = 'medium',
      type,
      variant = 'primary',
      ...defaultProps
    }: ButtonProps,
    ref
  ) => {
    // Constants
    const buttonClassNames = classNames(
      styles[representation],
      styles[size],
      styles[variant],
      {
        [styles.destructive]: destructive,
        [styles.loading]: loading,
        [styles.fullwidth]: isFullwidth,
        [styles['fullwidth-mobile']]: isFullwidthMobile
      },
      className
    )

    return (
      <button
        data-testid="button"
        className={buttonClassNames}
        aria-selected={active}
        disabled={disabled || loading}
        {...{ ref, id, type, onClick }}
        {...defaultProps}
      >
        <ButtonLinkBase {...{ leadingIcon, trailingIcon, loading }}>{children}</ButtonLinkBase>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
