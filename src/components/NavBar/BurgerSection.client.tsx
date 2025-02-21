'use client'

import { CSSProperties, useEffect, useRef, useState } from 'react'
import styles from './nav.module.css'
import Burger from '../Icon/Burger'
import { createPortal } from 'react-dom'

export default function BurgerSection() {
  const [showMenu, setShowMenu] = useState(false)
  const ref = useRef<HTMLUListElement>(null)
  const styleOverride = {
    customStyle: {
      position: 'relative' as CSSProperties['position']
    }
  }
  useEffect(() => {
    const nav = document.querySelector('nav')
    if (showMenu) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '17px'
      if (nav){
        nav.style.paddingRight = '17px'
      }
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.paddingRight = '0px'
      if (nav){
        nav.style.paddingRight = '0px'
      }
    }
  }, [showMenu])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const handleClick = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>
      <div className={styles.navMenu} onClick={handleClick}>
        <Burger styleOverride={styleOverride} />
      </div>
      {createPortal(
          <div className={showMenu ? styles.sideMenu : ''}>
            <ul
              ref={ref}
              className={
                showMenu ? styles.sideMenuShown : styles.sideMenuHidden
              }
            >
              <li>Estudio</li>
              <li>Comunidad</li>
              <li>Foro</li>
              <li>Precios</li>
              <li>Asistencia</li>
            </ul>
          </div>,
          document.body
        )}
    </>
  )
}
