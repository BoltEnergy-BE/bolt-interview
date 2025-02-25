export type BannerProps = {
  title?: string
  type?: 'informative' | 'positive' | 'warning' | 'blocking' | 'neutral'
  className?: string
  as?: 'div' | 'section'
}
