import style from './component.module.css'
import IconProps from './interface'

export default function Book({ styleOverride = {} }: IconProps): JSX.Element {
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
        <path d="M12 21V7" />
        <path d="m16 12 2 2 4-4" />
        <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
      </svg>
    </div>
  )
}
