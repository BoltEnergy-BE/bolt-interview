import { type JSX, ReactElement } from 'react'
import { ButtonLinkBaseProps } from '@design-system/button-link-base/types.ts'

export type TextLinkProps = Omit<ButtonLinkBaseProps, 'children'> & {
  cloneElement: ReactElement
  external?: boolean
  hideExternalIcon?: boolean
  onClick?: JSX.IntrinsicElements['a']['onClick']
}
