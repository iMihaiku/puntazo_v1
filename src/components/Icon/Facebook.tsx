import { memo } from 'react'
import style from './component.module.css'
import type IconProps from './interface'

function Facebook({ styleOverride = {} }: IconProps): JSX.Element {
  const {
    customStyle = { position: 'relative', width: 24, height: 24 },
    size = { width: 24, height: 24 },
    fill = 'none'
  } = styleOverride
  return (
    <div className={style.icon} style={customStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size.width}
        height={size.height}
        viewBox="0 0 1024 1024"
        fill={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <mask id="a" fill="blue">
          <path
            d="m0 0h1023.94v1017.74h-1023.94z"
            fill="#fff"
            fillRule="evenodd"
          />
        </mask>
        <path
          d="m1024 512c0-282.77-229.23-512-512-512s-512 229.23-512 512c0 255.554 187.231 467.37 432 505.78v-357.78h-130v-148h130v-112.8c0-128.32 76.438-199.2 193.39-199.2 56.017 0 114.61 10 114.61 10v126h-64.562c-63.603 0-83.438 39.467-83.438 79.957v96.043h142l-22.7 148h-119.3v357.78c244.769-38.41 432-250.226 432-505.78"
          fill="#fffffe"
          fillRule="evenodd"
          mask="url(#a)"
        />
      </svg>
    </div>
  )
}
export default memo(Facebook)
