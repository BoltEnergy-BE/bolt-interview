import { icons } from '@design-system/icon/icons.tsx'
import { PropsWithChildren } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'layered'
export type LinkVariant = 'primary' | 'secondary' | 'tertiary'
export type ButtonLinkSizes = 'small' | 'medium' | 'large'

export type ButtonLinkBaseProps = PropsWithChildren<
  {
    disabled?: boolean
    loading?: boolean
    destructive?: boolean
    leadingIcon?: keyof typeof icons
    trailingIcon?: keyof typeof icons
    isFullwidth?: boolean
    isFullwidthMobile?: boolean
    size?: ButtonLinkSizes
  } & (
    | {
        representation?: 'button'
        variant?: ButtonVariant
      }
    | {
        representation?: 'link'
        variant?: LinkVariant
      }
  )
>
