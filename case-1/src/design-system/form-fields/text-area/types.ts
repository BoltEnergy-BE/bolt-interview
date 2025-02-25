import { ComponentProps } from 'react'
import { FormFieldLayoutProps } from '../_layout/types.ts'

export type TextAreaProps = Omit<ComponentProps<'textarea'>, 'prefix'> & Omit<FormFieldLayoutProps, 'children'>
