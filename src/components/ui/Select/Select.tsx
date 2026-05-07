import { cn } from '@/utils'

import styles from './Select.module.scss'

interface SelectProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'onChange'
> {
  className?: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement, Element>) => void
  options: { value: string; label: string }[]
}

export const Select: React.FC<SelectProps> = ({
  className,
  value,
  onChange,
  options,
  ...props
}) => {
  return (
    <select
      className={cn(styles.root, className)}
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
