import { ComponentPropsWithoutRef, forwardRef } from 'react'
import classNames from 'classnames'
import styles from './Form.module.scss'

const EmptyField = () => <div />

const FormFooter = ({ children, className, ...props }: ComponentPropsWithoutRef<'footer'>) => {
  return (
    <footer className={classNames(styles['form-footer'], className)} {...props}>
      {children}
    </footer>
  )
}

const Form = forwardRef<HTMLFormElement, ComponentPropsWithoutRef<'form'>>(({ children, className, ...props }, ref) => {
  return (
    <form ref={ref} className={classNames(styles.form, className)} {...props}>
      {children}
    </form>
  )
})

Form.displayName = 'Form'

// Done like this instead of Form.Footer to avoid type errors due to forwardRef
const FormNamespace = Object.assign(Form, { EmptyField, Footer: FormFooter })

export default FormNamespace
