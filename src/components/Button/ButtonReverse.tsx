import style from './component.module.css'

export default function ButtonReverse({
  children,
  styleOverride = {}
}): JSX.Element {
  return (
      <button className={style.buttonReverse} style={styleOverride}>
        {children}
      </button>
  )
}
