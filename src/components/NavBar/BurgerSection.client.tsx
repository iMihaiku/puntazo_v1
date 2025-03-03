'use client'

import { CSSProperties, useEffect, useRef, useState } from 'react'
import styles from './nav.module.css'
import Burger from '../Icon/Burger'
import { createPortal } from 'react-dom'
import Book from '../Icon/Book'
import Target from '../Icon/Target'
import Brain from '../Icon/Brain'
import Chart from '../Icon/Chart'
import Trophy from '../Icon/Trophy'
import Divider from '../Divider/Divider'
import Login from '../Icon/Login'
import Register from '../Icon/Register'
import Link from 'next/link'
import Foro from '../Icon/Foro'

export default function BurgerSection() {
  const [showMenu, setShowMenu] = useState(false)
  const [isClient, setIsClient] = useState(false)

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
      if (nav) {
        nav.style.paddingRight = '47px'
      }
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.paddingRight = '0px'
      if (nav) {
        nav.style.paddingRight = '30px'
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

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleClick = () => {
    setShowMenu(!showMenu)
  }
  const styleOverrideIcons = {
    customStyle: {
      position: 'relative' as 'relative',
      height: '24px',
      width: '24px'
    },
    size: { width: '24px', height: '24px' }
  }
  return (
    <>
      <div className={styles.navMenu} onClick={handleClick}>
        <Burger styleOverride={styleOverride} />
      </div>
      {isClient &&
        createPortal(
          <div className={showMenu ? styles.sideMenu : ''}>
            <ul
              ref={ref}
              className={
                showMenu ? styles.sideMenuShown : styles.sideMenuHidden
              }
            >
              <li className={styles.sideMenuListItem}>
                <div>
                  <Book styleOverride={styleOverrideIcons} />
                  <Link href={''}>Estudio</Link>
                </div>
              </li>
              <li className={styles.sideMenuListItem}>
                <div>
                  <Target styleOverride={styleOverrideIcons} />
                  <Link href={''}>Comunidad</Link>
                </div>
              </li>
              <li className={styles.sideMenuListItem}>
                <div>
                  <Foro styleOverride={styleOverrideIcons} />
                  <Link href={''}>Foro</Link>
                </div>
              </li>
              <li className={styles.sideMenuListItem}>
                <div>
                  <Trophy styleOverride={styleOverrideIcons} />
                  <Link href={''}>Precios</Link>
                </div>
              </li>
              <li className={styles.sideMenuListItem}>
                <div>
                  <Chart styleOverride={styleOverrideIcons} />
                  <Link href={''}>Asistencia</Link>
                </div>
              </li>
              <Divider />
              <li className={styles.sideMenuListItem}>
                <div>
                  <Login styleOverride={styleOverrideIcons} />
                  <Link href={''}>Acceder</Link>
                </div>
              </li>
              <li className={styles.sideMenuListItem}>
                <div>
                  <Register styleOverride={styleOverrideIcons} />
                  <Link href={'/register'}>Registrar</Link>
                </div>
              </li>
            </ul>
          </div>,
          document.body
        )}
    </>
  )
}
