import classNames from 'classnames'
import { createElement } from 'react'
import { AvailableHeadingTags, HeadingProps } from './types'

const Heading = <Tag extends AvailableHeadingTags>({ as, children, className, variant, weight, ...props }: HeadingProps<Tag>) => {
  return createElement(
    as,
    {
      className: classNames(className, { [variant as string]: !!variant }),
      style: weight ? { fontWeight: weight } : undefined,
      ...props
    },
    children
  )
}

export default Heading
