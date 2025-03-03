import Link from 'next/link'
import style from './component.module.css'

export default function ButtonReverse({
  children,
  href,
  styleOverride = {}
}): JSX.Element {
  return (
    <Link className={style.buttonReverse} style={styleOverride} href={href}>
      {children}
    </Link>
  )
}
