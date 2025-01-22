'use client'

import styles from './nav.module.css'
import { useEffect, useState } from 'react'

export default function NavBar({ children }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : styles.animationHeader}`}
    >
      {children}
    </nav>
  )
}