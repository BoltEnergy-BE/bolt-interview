export type LoadingSkeletonProps = {
  className?: string
  as?: keyof Pick<HTMLElementTagNameMap, 'div' | 'section' | 'ul' | 'li'>
  gap?: number
}

type AspectRatio = `${number} / ${number}` | `${number}/${number}`

export type LoadingSkeletonRectangle = {
  className?: string
  width?: number | string
  radius?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
} & (
  | {
      height: number | string
      aspectRatio?: AspectRatio
    }
  | {
      height?: number | string
      aspectRatio: AspectRatio
    }
)
