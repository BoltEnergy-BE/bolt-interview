import { PropsWithChildren } from 'react'

export type InlineMessageProps = PropsWithChildren<{
  type: 'positive' | 'warning' | 'negative' | 'informative' | 'neutral'
  className?: string
}>
