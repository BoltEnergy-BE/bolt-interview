import { InlineMessageProps } from './types.ts'
import { icons } from '@design-system/icon/icons.tsx'

export const INLINE_MESSAGE_ICONS: { [key in InlineMessageProps['type']]: keyof typeof icons } = {
  positive: 'checkCircle',
  warning: 'exclamation',
  negative: 'cross',
  informative: 'info',
  neutral: 'info'
}
