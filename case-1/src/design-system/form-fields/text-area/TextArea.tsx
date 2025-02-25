import styles from '../_layout/Layout.module.scss'
import { forwardRef } from 'react'
import { FormFieldLayout } from '@design-system/form-fields/_layout'
import { TextAreaProps } from './types.ts'

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      description,
      disabled,
      error,
      label,
      labelComponentSlot,
      optionalText,
      placeholder,
      grid,
      layoutClassName,
      readonly,
      ...inputProps
    }: TextAreaProps,
    ref
  ) => {
    // Constants
    const layoutProps = { label, error, disabled, description, optionalText, labelComponentSlot, grid, layoutClassName, readonly }

    return (
      <FormFieldLayout required={inputProps.required} name={inputProps.name} {...layoutProps}>
        <textarea
          id={inputProps.name}
          ref={ref}
          data-testid="textarea"
          className={styles.input}
          disabled={disabled}
          aria-invalid={!!error}
          placeholder={placeholder || label}
          {...inputProps}
        />
      </FormFieldLayout>
    )
  }
)

TextArea.displayName = 'TextArea'

export default TextArea
