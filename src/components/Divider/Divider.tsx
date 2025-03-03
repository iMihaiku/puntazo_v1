import { memo } from 'react'
import styles from './component.module.css'

function Divider({ styleOverride = {} }): JSX.Element {
  return <hr className={styles.divider} style={styleOverride} />
}

export default memo(Divider)
