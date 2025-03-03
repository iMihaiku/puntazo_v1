import style from './component.module.css'
import IconProps from './interface'

export default function Foro({ styleOverride = {} }: IconProps): JSX.Element {
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
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <rect width="3" height="9" x="7" y="7" />
        <rect width="3" height="5" x="14" y="7" />
      </svg>
    </div>
  )
}
