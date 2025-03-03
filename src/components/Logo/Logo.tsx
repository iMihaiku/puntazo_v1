import localFont from 'next/font/local'
import styles from './component.module.css'
import { memo } from 'react'

const rocketFont = localFont({ src: '../../resources/ROCKET WILDNESS.ttf' })

function Logo() {
  return (
    <div className={rocketFont.className} id={styles.navLogo}>
      <span>Skill</span>
      <span>Check</span>
    </div>
  )
}

export default memo(Logo)