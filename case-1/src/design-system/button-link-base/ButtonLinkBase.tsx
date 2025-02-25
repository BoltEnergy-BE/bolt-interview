import { ButtonLinkBaseProps } from './types.ts'
import { ButtonLoadingIndicator } from '../button'
import styles from './ButtonLinkBase.module.scss'
import { Icon } from "@design-system/icon";

const ButtonLinkBase = ({ children, trailingIcon, leadingIcon, loading }: ButtonLinkBaseProps) => {
  return (
    <>
      {loading && <ButtonLoadingIndicator className={styles.loader} />}
      {!!leadingIcon && <Icon name={leadingIcon} />}
      {!!children && <span className={styles.text}>{children}</span>}
      {!!trailingIcon && <Icon name={trailingIcon} />}
    </>
  )
}

export default ButtonLinkBase
