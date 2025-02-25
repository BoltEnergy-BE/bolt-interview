import { PropsWithChildren } from 'react'
import { TextLink as DSTextLink } from '@design-system/text-link'
import { TextLinkProps } from './types'
import { Link as ReactRouterLink } from 'react-router'

const Link = ({
  as,
  children,
  href,
  destructive,
  size,
  representation,
  variant,
  external,
  trailingIcon,
  leadingIcon,
  isFullwidth,
  isFullwidthMobile,
  target,
  hideExternalIcon,
  loading,
  ...nativeProps
}: PropsWithChildren<TextLinkProps>) => {
  const DSTextLinkProps = {
    destructive,
    size,
    representation,
    variant,
    external,
    trailingIcon,
    leadingIcon,
    isFullwidth,
    isFullwidthMobile,
    hideExternalIcon,
    loading
  }

  return (
    <DSTextLink
      cloneElement={
        as === 'a' || external ? (
          <a href={href} target={target || (external ? '_blank' : undefined)} rel="noreferrer noopener" {...nativeProps}>
            {children}
          </a>
        ) : (
          <ReactRouterLink to={href} target={target} {...nativeProps}>
            {children}
          </ReactRouterLink>
        )
      }
      {...DSTextLinkProps}
    />
  )
}

export default Link
