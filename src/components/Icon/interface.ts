export default interface IconProps {
  styleOverride?: {
    customStyle?: React.CSSProperties
    size?: {
      width: string
      height: string
    }
    fill?: string,
    stroke?: string
  }
}