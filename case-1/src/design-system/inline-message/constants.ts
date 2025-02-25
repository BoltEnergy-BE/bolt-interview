import { InlineMessageProps } from './types.ts'
import { icons } from '@design-system/icon/icons.ts'

export const INLINE_MESSAGE_ICONS: { [key in InlineMessageProps['type']]: keyof typeof icons } = {
  positive: 'checkCircle',
  warning: 'exclamation',
  negative: 'crossCircle',
  informative: 'info',
  neutral: 'info'
}
