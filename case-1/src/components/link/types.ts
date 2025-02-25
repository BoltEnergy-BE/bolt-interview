import { TextLinkProps as DSTextLinkProps } from '@boltenergy-be/design-system/dist/components/text-link/types'
import { LinkProps } from 'react-router-dom'

export type TextLinkProps = Omit<DSTextLinkProps, 'cloneElement'> &
  (
    | ({
        as?: 'a'
        external?: true
        href: string
      } & Omit<JSX.IntrinsicElements['a'], 'href'>)
    | ({
        as?: 'Link'
        external?: false
        href: LinkProps['to']
      } & Omit<JSX.IntrinsicElements['a'], 'href'> &
        Omit<LinkProps, 'to'>)
  )
