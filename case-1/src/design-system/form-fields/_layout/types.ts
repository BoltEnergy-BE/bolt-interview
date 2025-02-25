import { ComponentProps, CSSProperties, ReactElement, ReactNode } from 'react'
import { LabelProps } from '@design-system/form-fields/field-label/types.ts'
import { icons } from '@design-system/icon/icons.tsx'

type CommonLayoutProps = {
  label: string
  disabled?: boolean
  error?: boolean | string | ReactNode
  description?: ReactNode
  labelComponentSlot?: ReactNode
  grid?: 'full' | CSSProperties['gridColumn']
  layoutClassName?: string
  childrenWrapperClassName?: string
  readonly?: ReactNode | string
} & Pick<LabelProps<'label'>, 'required' | 'optionalText'>

export type FormFieldLayoutProps = CommonLayoutProps & {
  name?: string
  children: ReactNode
}

export type FieldsetLayoutProps = CommonLayoutProps & ComponentProps<'fieldset'>

export type SuffixPrefix = {
  as: keyof typeof icons | string | ReactElement
  className?: string
}
