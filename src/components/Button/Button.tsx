import style from './component.module.css'

export default function Button({ children, styleOverride = {} }): JSX.Element {
  return (
    <button className={style.buttonPrimary} style={styleOverride}>
      {children}
    </button>
  )
}
