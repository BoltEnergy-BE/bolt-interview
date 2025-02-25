import { BannerProps } from './types'
import { icons } from '@design-system/icon/icons'

export const ICONS_BY_TYPE: { [key in NonNullable<BannerProps['type']>]: keyof typeof icons } = {
  informative: 'info',
  neutral: 'info',
  positive: 'checkCircle',
  warning: 'exclamation',
  blocking: 'exclamation'
}
