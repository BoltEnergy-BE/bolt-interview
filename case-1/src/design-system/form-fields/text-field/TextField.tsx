import { TextFieldProps } from '@design-system/form-fields/text-field/types.ts'
import styles from '../_layout/Layout.module.scss'
import classNames from 'classnames'
import { icons } from '@design-system/icon/icons.tsx'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { FormFieldLayout } from '@design-system/form-fields/_layout'
import { Icon } from '@design-system/icon'

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      description,
      disabled,
      error,
      label,
      labelComponentSlot,
      optionalText,
      prefix,
      suffix,
      grid,
      type = 'text',
      placeholder,
      layoutClassName,
      readonly,
      childrenWrapperClassName,
      ...inputProps
    },
    ref
  ) => {
    // Constants
    const prefixIcon = prefix?.as || (type === 'search' ? ('search' as keyof typeof icons) : undefined)

    // Refs
    const prefixRef = useRef<HTMLSpanElement | null>(null)
    const suffixRef = useRef<HTMLSpanElement | null>(null)

    // Local state
    const [paddingOverride, setPaddingOverride] = useState<{ prefix: null | number; suffix: null | number }>({
      prefix: prefixRef?.current?.clientWidth || null,
      suffix: suffixRef?.current?.clientWidth || null
    })

    useEffect(() => {
      setPaddingOverride({
        prefix: prefixRef?.current?.clientWidth || null,
        suffix: suffixRef?.current?.clientWidth || null
      })
    }, [])

    const layoutProps = {
      label,
      error,
      disabled,
      description,
      optionalText,
      labelComponentSlot,
      childrenWrapperClassName,
      grid,
      layoutClassName,
      readonly,
      suffix: suffixRef?.current?.clientWidth,
      prefix: prefixRef?.current?.clientWidth
    }

    return (
      <FormFieldLayout required={inputProps.required} name={inputProps.name} {...layoutProps}>
        <>
          {/* PREFIX  test*/}
          {!inputProps.hidden && !!prefixIcon && (
            <span ref={prefixRef} data-testid="prefix" className={classNames(styles.prefix, { [prefix!.className!]: !!prefix?.className })}>
              {typeof prefixIcon === 'string' && prefixIcon in icons ? <Icon name={prefixIcon as keyof typeof icons} /> : prefixIcon}
            </span>
          )}

          {/* INPUT */}
          <input
            id={inputProps.name}
            data-testid="input"
            ref={ref}
            className={styles.input}
            disabled={disabled}
            aria-invalid={!!error}
            placeholder={placeholder || label}
            {...{ type }}
            {...inputProps}
            style={{
              ...inputProps.style,
              ...(!readonly && paddingOverride?.prefix && { paddingLeft: paddingOverride?.prefix }),
              ...(!readonly && paddingOverride?.suffix && { paddingRight: paddingOverride?.suffix })
            }}
          />

          {/* SUFFIX */}
          {!inputProps.hidden && !!suffix?.as && (
            <span
              ref={suffixRef}
              data-testid="suffix"
              className={classNames(styles.suffix, {
                [styles['subdued-suffix']]: type === 'search',
                [suffix!.className!]: !!suffix?.className
              })}
            >
              {icons[suffix.as as keyof typeof icons] ? <Icon name={suffix.as as keyof typeof icons} /> : suffix.as}
            </span>
          )}
        </>
      </FormFieldLayout>
    )
  }
)

TextField.displayName = 'TextField'

export default TextField
