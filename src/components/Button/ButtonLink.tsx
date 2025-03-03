import Link from 'next/link'
import style from './component.module.css'

export default function Button({
  children,
  href,
  styleOverride = {},
  type = 'button'
}): JSX.Element {
  return (
    <Link
      className={style.buttonPrimary}
      style={styleOverride}
      type={type as 'button' | 'submit' | 'reset'}
      href={href}
    >
      {children}
    </Link>
  )
}
