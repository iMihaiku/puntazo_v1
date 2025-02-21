import style from './component.module.css'
import IconProps from './interface'

export default function Target({
  styleOverride = {}
}: IconProps): JSX.Element {
  const {
    customStyle = {},
    size = { width: 24, height: 24 },
    fill = '',
    stroke = 'currentcolor'
  } = styleOverride
  return (
    <div className={style.icon} style={customStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size.width}
        height={size.height}
        viewBox="0 0 28 28"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="14" cy="14" r="13" />
        <circle cx="14" cy="14" r="8" />
        <circle cx="14" cy="14" r="3" />
      </svg>
    </div>
  )
}
