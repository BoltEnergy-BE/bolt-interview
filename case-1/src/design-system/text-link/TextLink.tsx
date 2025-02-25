import { cloneElement, ComponentProps, ReactElement } from 'react'
import { TextLinkProps } from '@design-system/text-link/types.ts'
import classNames from 'classnames'
import styles from '@design-system/button-link-base/ButtonLinkBase.module.scss'
import ButtonLinkBase from '@design-system/button-link-base/ButtonLinkBase.tsx'

const TextLink = ({
  cloneElement: element,
  destructive,
  size = 'medium',
  representation = 'link',
  variant = 'primary',
  external,
  trailingIcon,
  leadingIcon,
  hideExternalIcon,
  isFullwidth,
  isFullwidthMobile,
  loading,
  disabled,
  onClick
}: TextLinkProps) => {
  // Constants
  const typedElement = element as ReactElement<ComponentProps<'a'> & { 'data-testid'?: string }>

  return cloneElement(
    typedElement,
    {
      ['data-testid']: typedElement.props['data-testid'] ?? 'link',
      className: classNames(
        styles[representation],
        styles[size],
        styles[variant],
        {
          [styles.destructive]: destructive,
          [styles.fullwidth]: isFullwidth,
          [styles['fullwidth-mobile']]: isFullwidthMobile,
          [styles.disabled]: disabled || loading,
          [styles.loading]: loading
        },
        typedElement.props.className
      ),
      target: typedElement.props.target ?? (external ? '_blank' : '_self'),
      ...(external ? { rel: typedElement.props.rel ?? 'noreferrer noopener' } : {}),
      onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (loading) event.preventDefault()
        else onClick?.(event)
      }
    },
    <>
      <ButtonLinkBase
        loading={loading}
        trailingIcon={trailingIcon || (external && !hideExternalIcon ? 'externalLink' : undefined)}
        leadingIcon={leadingIcon}
      >
        {typedElement.props.children}
      </ButtonLinkBase>
    </>
  )
}

export default TextLink
