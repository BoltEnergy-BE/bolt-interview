import { IconProps } from './types.ts'
import { icons } from './icons.ts'

const Icon = ({ name, size = 24, ...props }: IconProps) => {
  return (
    <svg
      {...props}
      data-testid={name}
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  )
}

export default Icon
