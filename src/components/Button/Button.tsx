'use client'

import style from './component.module.css'

export default function Button({
  children,
  className = '',
  action = () => {},
  styleOverride = {},
  type = 'button'
}): JSX.Element {
  return (
    <button
      onClick={action}
      className={`${className} ${style.buttonPrimary}`}
      style={styleOverride}
      type={type as 'button' | 'submit' | 'reset'}
    >
      {children}
    </button>
  )
}
