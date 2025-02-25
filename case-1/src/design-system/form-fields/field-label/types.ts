import { ComponentPropsWithoutRef, ReactNode } from 'react'

export type AvailableLabelTags = 'label' | 'legend' | 'strong'

type CommonLabelProps<Tag extends AvailableLabelTags = 'label'> = Omit<
  ComponentPropsWithoutRef<Tag>,
  Tag extends 'legend' ? 'htmlFor' : ''
> & {
  children?: ReactNode
  optionalText?: ReactNode
  required?: boolean
  invalid?: boolean
  htmlFor?: Tag extends 'label' ? string : never
  readonly?: boolean
  className?: string
}

export type LabelContentProps<Tag extends AvailableLabelTags> = CommonLabelProps<Tag> & {
  as?: Tag
}

export type LabelProps<Tag extends AvailableLabelTags> = CommonLabelProps<Tag> & {
  as?: Tag
}
