import TagProps from './inteface'
import style from './component.module.css'

export default function Tag({children, tagStyle, styleOverride}: TagProps): JSX.Element {
  const tagClasses = {
    danger: 'tagDanger',
    warning: 'tagWarning',
    success: 'tagSuccess'
  }
  return (
    <div className={`${style.tagContainer} ${style[tagClasses[tagStyle]]}`} style={styleOverride}>
      {children}
    </div>
  )
}
