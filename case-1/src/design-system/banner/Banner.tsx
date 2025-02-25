import styles from './Banner.module.scss'
import { BannerProps } from './types'
import classNames from 'classnames'
import { ICONS_BY_TYPE } from './constants'
import { createElement, PropsWithChildren } from 'react'
import { Icon } from '@design-system/icon'

const Banner = ({ children, title, type = 'neutral', className, as = 'div' }: PropsWithChildren<BannerProps>) => {
  return createElement(
    as,
    { className: classNames(styles.container, styles[type], className) },
    <>
      <Icon name={ICONS_BY_TYPE[type]} />
      <div className={styles.content}>
        {!!title && <strong>{title}</strong>}
        {!!children && <div>{children}</div>}
      </div>
    </>
  )
}

export default Banner
