import type { JSX } from 'react'

export type AvailableHeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps<Tag extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[Tag] & {
  as: keyof Pick<JSX.IntrinsicElements, AvailableHeadingTags>
  variant?: AvailableHeadingTags
  weight?: 300 | 400 | 600 | 700
}
