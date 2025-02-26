import { cloneElement, createElement, ForwardedRef, forwardRef } from 'react'
import styles from './Card.module.scss'
import classNames from 'classnames'
import { AvailableCardTags, CardActionProps, CardProps, CardTitleProps } from './types'
import { Heading } from '@design-system/heading'
import { LoadingSkeleton } from '@design-system/loading-skeleton'
import { useMediaQuery } from 'usehooks-ts'
import { BREAKPOINTS } from 'constants/breakpoints.ts'
import { Button } from '@design-system/button'
import { ButtonLinkBaseProps } from '@design-system/button-link-base/types.ts'
import { ButtonProps } from '@design-system/button/types.ts'

const Title = ({ children, as = 'h2', variant = 'h4', weight = 700, ...props }: CardTitleProps) => {
  return <Heading {...{ as, variant, weight, ...props }}>{children}</Heading>
}

const Action = ({ href, onClick, label, loading, ...props }: CardActionProps) => {
  const sharedProps = {
    className: styles.cta,
    representation: 'button' as const,
    variant: 'secondary' as ButtonLinkBaseProps['variant'],
    isFullwidth: true,
    loading,
    onClick
  }

  return href ? (
    cloneElement(
      href,
      {
        ...props,
        ...sharedProps,
        isFullwidth: true,
        variant: 'secondary',
        representation: 'button',
        className: styles.cta,
        onClick
      } as ButtonProps,
      label
    )
  ) : (
    <Button {...props} {...sharedProps}>
      {label}
    </Button>
  )
}

const Card = forwardRef(
  <Tag extends AvailableCardTags>(
    { border = true, image, children, className, as = 'div' as Tag, color = 'white', padding, shadow = true, ...tagProps }: CardProps<Tag>,
    ref: ForwardedRef<HTMLElement>
  ) => {
    // Media query
    const isTablet = useMediaQuery(`(min-width: ${BREAKPOINTS.tablet}px)`)

    // Constants
    const hasImageAndContent = !!image && !!children
    const containerPadding = !padding || typeof padding === 'number' ? padding : isTablet ? padding.mobile : padding.desktop
    const stylesOverrides = padding
      ? { ...tagProps.style, padding: hasImageAndContent ? 0 : `var(--spacing-${containerPadding})` }
      : tagProps.style

    return createElement(
      as,
      {
        className: classNames(
          styles.card,
          styles[color],
          {
            [styles['hide-border']]: !border,
            [styles['hide-shadow']]: !shadow
          },
          className
        ),
        ...tagProps,
        style: stylesOverrides,
        ref,
        ['data-img-pos']: image?.position || 'top'
      },
      <>
        {!!image && (
          <figure>
            {image.src ? (
              <img
                className={classNames(styles.img, { [styles['only-img']]: !!image && !children }, image.className)}
                src={image.src}
                alt={image.alt}
              />
            ) : typeof image.loading === 'boolean' ? (
              <LoadingSkeleton.Rectangle
                width="100%"
                height="100%"
                className={classNames(styles['img-loader'], { [styles['only-img']]: !!image && !children })}
              />
            ) : (
              image.loading
            )}
          </figure>
        )}

        {hasImageAndContent ? (
          <div
            data-id="card-content"
            className={styles.content}
            style={containerPadding ? { padding: `var(--spacing-${containerPadding})` } : undefined}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </>
    )
  }
)

Card.displayName = 'Card'
const CardWithSubcomponents = Object.assign(Card, { Title, Action })

export default CardWithSubcomponents
