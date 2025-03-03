import style from './component.module.css'
import IconProps from './interface'

export default function Login({ styleOverride = {} }: IconProps): JSX.Element {
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
        {' '}
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" x2="3" y1="12" y2="12" />
      </svg>
    </div>
  )
}