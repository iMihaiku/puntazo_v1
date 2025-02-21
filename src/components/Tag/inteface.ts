import { ReactNode } from "react"

export default interface TagProps {
  children: ReactNode
  tagStyle: 'danger' | 'warning' | 'success'
  styleOverride?: React.CSSProperties
}