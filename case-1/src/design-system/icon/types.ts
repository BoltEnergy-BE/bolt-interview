import { icons } from './icons.tsx'
import { ComponentProps } from 'react'

export type IconProps = {
  name: keyof typeof icons
  size?: number
} & Omit<ComponentProps<'svg'>, 'focusable' | 'xmlns' | 'width' | 'height' | 'fill' | 'viewBox'>
