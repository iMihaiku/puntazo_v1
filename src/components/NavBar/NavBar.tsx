'use client'

import { DeviceContext } from '@/hooks/useContextMobile'
import styles from './nav.module.css'
import { useContext, useEffect, useState } from 'react'
import debouncer from '@/lib/debouncer'
import useScrollDetector from '@/hooks/useScrollDetector'

export default function NavBar({ children }) {
  const scrolled = useScrollDetector()
  const context = useContext(DeviceContext)
  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : styles.animationHeader}`}
    >
      {children}
    </nav>
  )
}
