import classNames from 'classnames'
import { createElement, PropsWithChildren } from 'react'
import styles from './LoadingSkeleton.module.scss'
import { LoadingSkeletonProps, LoadingSkeletonRectangle } from './types'

// Wrapper
const LoadingSkeleton = ({ children, className, as = 'div' }: PropsWithChildren<LoadingSkeletonProps>) => {
  return createElement(as, { className: classNames(styles['skeleton-group'], className) }, children)
}

// Building blocks
const RectangleSkeleton = ({ className, width = '100%', height = 'fit-content', aspectRatio, radius = 'lg' }: LoadingSkeletonRectangle) => (
  <div
    className={classNames(styles.loader, className)}
    style={{ width, height, aspectRatio: aspectRatio || 'auto', borderRadius: radius !== 'none' ? `var(--radius-${radius})` : undefined }}
  />
)

const CircleSkeleton = ({ className, widthHeight }: { className?: string; widthHeight: number }) => (
  <div
    className={classNames(styles.loader, className)}
    style={{ borderRadius: widthHeight / 2, height: widthHeight, width: widthHeight }}
  />
)

const ButtonSkeleton = ({ className, isFullwidth }: { className?: string; isFullwidth?: boolean }) => (
  <RectangleSkeleton height={48} width={!isFullwidth ? 248 : undefined} className={classNames(className)} />
)

const ParagraphSkeleton = ({ lines = 1 }: { lines?: number }) => (
  <>
    {Array.from(Array(lines).keys()).map((line) => (
      <RectangleSkeleton key={line} height={20} />
    ))}
  </>
)

const TitleSkeleton = () => <LoadingSkeleton.Rectangle height={36} width="75%" />

// Building blocks
LoadingSkeleton.Rectangle = RectangleSkeleton
LoadingSkeleton.Circle = CircleSkeleton

// Elements
LoadingSkeleton.Button = ButtonSkeleton
LoadingSkeleton.Paragraph = ParagraphSkeleton
LoadingSkeleton.Title = TitleSkeleton

export default LoadingSkeleton
