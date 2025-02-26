import { PropsWithChildren, ReactElement, ReactNode } from 'react'
import { JSX } from 'react/jsx-runtime'
import { HeadingProps } from '@design-system/heading/types.ts'
import { ButtonLinkBaseProps } from '@design-system/button-link-base/types.ts'

export type AvailablePaddings = 400 | 500 | 600 | 0
export type AvailableCardTags = 'div' | 'section' | 'article' | 'aside' | 'header' | 'nav' | 'button' | 'li' | 'fieldset'
export type CardColors = 'white' | 'pink' | 'neutral' | 'green' | 'yellow' | 'lightblue' | 'orange' | 'purple'
export type CardProps<Tag extends keyof JSX.IntrinsicElements = 'div'> = {
  border?: boolean
  image?: { position?: 'left' | 'right' | 'top' | 'bottom' } & (
    | {
        src: string
        alt: string
        className?: string
        loading?: never
      }
    | {
        src?: never
        alt?: never
        className?: never
        loading: ReactNode | boolean
      }
  )
  as?: keyof Pick<JSX.IntrinsicElements, Tag>
  color?: CardColors
  shadow?: boolean
  padding?: AvailablePaddings | { desktop: AvailablePaddings; mobile: AvailablePaddings }
} & JSX.IntrinsicElements[Tag]

export type CardTitleProps = PropsWithChildren<Partial<Pick<HeadingProps<'div'>, 'as' | 'variant' | 'className' | 'weight'>>>
export type CardActionProps = Omit<ButtonLinkBaseProps, 'isFullwidthMobile' | 'variant' | 'isFullwidth' | 'representation' | 'children'> & {
  label: string
} & (
    | {
        href: ReactElement
        onClick?: () => void
      }
    | {
        onClick: () => void
        href?: never
      }
  )
