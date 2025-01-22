import style from './component.module.css'

export default function SparkAI({ styleOverride }): JSX.Element {
  const { customStyle, size, fill } = styleOverride
  return (
    <div className={style.icon} style={customStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="-5.0 -10.0 110.0 135.0"
        width={size.width}
        height={size.height}
      >
        <path
          fill={fill}
          d="m50 5 5.7695 15.598c4.0547 10.949 12.684 19.578 23.633 23.633l15.598 5.7695-15.598 5.7695c-10.949 4.0547-19.578 12.684-23.633 23.633l-5.7695 15.598-5.7695-15.598c-4.0547-10.949-12.684-19.578-23.633-23.633l-15.598-5.7695 15.598-5.7695c10.949-4.0547 19.578-12.684 23.633-23.633z"
        />
      </svg>
    </div>
  )
}
