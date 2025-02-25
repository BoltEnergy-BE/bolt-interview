import { FieldLabel } from '@design-system/form-fields/field-label'
import styles from './Layout.module.scss'
import classNames from 'classnames'
import { FormFieldLayoutProps } from '@design-system/form-fields/_layout/types.ts'
import { InlineMessage } from '@design-system/inline-message'
import { getGridColumnStyle } from '@design-system/form-fields/utils.ts'

const FormFieldLayout = ({
  children,
  description,
  disabled,
  error,
  label,
  labelComponentSlot,
  name,
  optionalText,
  required,
  layoutClassName,
  childrenWrapperClassName,
  grid,
  readonly
}: FormFieldLayoutProps) => {
  return (
    <div className={classNames(styles['form-field-layout'], layoutClassName)} style={getGridColumnStyle(grid)}>
      {!!label && (
        <FieldLabel htmlFor={name} invalid={!!error && !disabled} optionalText={optionalText} required={required} className={styles.label}>
          {label}
        </FieldLabel>
      )}

      {!!description && (
        <small data-testid="description" className={styles.description}>
          {description}
        </small>
      )}

      <div
        className={classNames(styles['input-layout'], childrenWrapperClassName, {
          [styles.errored]: !!error,
          [styles.disabled]: disabled,
          [styles.readonly]: readonly
        })}
      >
        {readonly || children}
      </div>

      {!!label && !!labelComponentSlot && (
        <div data-testid="component-slot" className={styles['component-slot']}>
          {labelComponentSlot}
        </div>
      )}

      {!!error && typeof error !== 'boolean' && (
        <InlineMessage className={styles['error-msg']} type="negative">
          {error}
        </InlineMessage>
      )}
    </div>
  )
}

export default FormFieldLayout
