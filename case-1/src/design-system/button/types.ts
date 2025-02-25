import type { JSX } from 'react'
import { ButtonLinkBaseProps } from '../button-link-base/types.ts'

export type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'children'> &
  ButtonLinkBaseProps & {
    active?: boolean
  }
