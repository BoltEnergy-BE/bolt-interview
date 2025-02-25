import { ComponentProps } from 'react'
import { FormFieldLayoutProps, SuffixPrefix } from '@design-system/form-fields/_layout/types.ts'

export type TextFieldProps = {
  prefix?: SuffixPrefix
  suffix?: SuffixPrefix
  type?: 'text' | 'search' | 'password' | 'email' | 'number'
} & Omit<ComponentProps<'input'>, 'type' | 'prefix'> &
  Omit<FormFieldLayoutProps, 'children'>
