/* eslint-disable @typescript-eslint/no-unused-vars */
import style from './component.module.css'
import type IconProps from './interface'

export default function Burger({ styleOverride = {} }: IconProps): JSX.Element {
  const {
    customStyle = {},
    size = { width: 30, height: 24 },
    fill = '',
    stroke = 'currentcolor'
  } = styleOverride

  return (
    <div className={style.icon} style={customStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size.width}
        height={size.height}
        viewBox="-1 -2 30 24"
      >
        <path
          stroke="url('#colorGradiante')"
          strokeWidth="4"
          strokeLinecap="round"
          d="M1 0h26"
        />
        <path
          stroke="url('#colorGradiante')"
          strokeWidth="4"
          strokeLinecap="round"
          d="M1 10h26"
        />
        <path
          stroke="url('#colorGradiante')"
          strokeWidth="4"
          strokeLinecap="round"
          d="M1 20h26"
        />
        <defs>
          <linearGradient gradientUnits='userSpaceOnUse' id="colorGradiante" x1={0} x2={40} y1={10} y2={30}>
            <stop stopColor="#2dd4bf" offset="0"></stop>
            <stop stopColor="#ffffff" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
