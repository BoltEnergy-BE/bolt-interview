import { FieldsetLayoutProps } from './types.ts'
import { FieldLabel } from '@design-system/form-fields/field-label'
import { InlineMessage } from '@design-system/inline-message'
import styles from './Layout.module.scss'
import classNames from 'classnames'
import { getGridColumnStyle } from '@design-system/form-fields/utils.ts'

const FieldsetLayout = ({
  children,
  description,
  disabled,
  error,
  label,
  labelComponentSlot,
  optionalText,
  required,
  className,
  grid,
  readonly,
  ...props
}: FieldsetLayoutProps) => {
  return (
    <fieldset className={classNames(styles['form-field-layout'], className)} style={getGridColumnStyle(grid)} {...{ disabled }} {...props}>
      {!!label && (
        <FieldLabel as="legend" invalid={!!error && !disabled} optionalText={optionalText} required={required} className={styles.label}>
          {label}
        </FieldLabel>
      )}

      {!!label && !!description && (
        <small data-testid="description" className={styles.description}>
          {description}
        </small>
      )}

      {readonly ?? children}

      {!!label && !!labelComponentSlot && (
        <div data-testid="component-slot" className={styles['component-slot']}>
          {labelComponentSlot}
        </div>
      )}

      {!!error && typeof error !== 'boolean' && !disabled && <InlineMessage type="negative">{error}</InlineMessage>}
    </fieldset>
  )
}

export default FieldsetLayout
