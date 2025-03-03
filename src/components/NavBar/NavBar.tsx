'use client'

import { DeviceContext } from '@/hooks/useContextMobile'
import styles from './nav.module.css'
import { useContext } from 'react'
import useScrollDetector from '@/hooks/useScrollDetector'

export default function NavBar({ children }): JSX.Element {
  const scrolled = useScrollDetector()
  useContext(DeviceContext)
  return (
    <nav
      className={`${styles.nav} ${(scrolled ?? false) ? styles.scrolled : styles.animationHeader}`}
    >
      {children}
    </nav>
  )
}
