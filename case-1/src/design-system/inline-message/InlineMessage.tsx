import { InlineMessageProps } from './types.ts'
import { INLINE_MESSAGE_ICONS } from './constants.ts'
import styles from './InlineMessage.module.scss'
import classNames from 'classnames'
import { Icon } from '@design-system/icon'

const InlineMessage = ({ type = 'neutral', children, className }: InlineMessageProps) => {
  return (
    <span data-testid="inline-msg" className={classNames(styles['inline-message'], styles[type], className)}>
      <Icon name={INLINE_MESSAGE_ICONS[type]} />
      <span data-testid="inline-msg_text">{children}</span>
    </span>
  )
}

export default InlineMessage
