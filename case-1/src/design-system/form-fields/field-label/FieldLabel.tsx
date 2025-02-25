import { AvailableLabelTags, LabelContentProps, LabelProps } from './types.ts'
import styles from './FieldLabel.module.scss'
import classNames from 'classnames'
import { createElement } from 'react'

const Label = <Tag extends AvailableLabelTags>({
  children,
  invalid,
  optionalText,
  required,
  as,
  readonly,
  className,
  ...tagProps
}: LabelContentProps<Tag>) => {
  const renderAs = as || (readonly ? 'strong' : 'label')

  return createElement(
    renderAs,
    { className: classNames(styles.label, className), ...tagProps },
    <>
      <span className={classNames(styles['label-text'], { [styles.invalid]: invalid })}>
        {children}
      </span>
      {required && (
        <sup aria-hidden="true" className={styles.astrix}>
          *
        </sup>
      )}
      {!required && optionalText && (
        <small className={styles['optional-text']}>
          — {optionalText}
        </small>
      )}
    </>
  )
}

const FieldLabel = <Tag extends AvailableLabelTags>({ children, invalid, optionalText, required, ...tagProps }: LabelProps<Tag>) => {
  return (
    <Label {...{ invalid, optionalText, required }} {...tagProps}>
      {children}
    </Label>
  )
}

export default FieldLabel
