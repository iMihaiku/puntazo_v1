'use client'

import { type CSSProperties, useEffect, useRef, useState } from 'react'
import styles from './nav.module.css'
import Burger from '../Icon/Burger'
import { createPortal } from 'react-dom'
import Book from '../Icon/Book'
import Target from '../Icon/Target'
import Chart from '../Icon/Chart'
import Trophy from '../Icon/Trophy'
import Divider from '../Divider/Divider'
import Login from '../Icon/Login'
import Register from '../Icon/Register'
import Link from 'next/link'
import Foro from '../Icon/Foro'
import { useSession } from '@/hooks/useContextSession'
import { UserHeader } from '../User/UserHeader'

const styleOverrideIcons = {
  customStyle: {
    position: 'relative' as 'relative',
    height: '24px',
    width: '24px'
  },
  size: { width: '24px', height: '24px' }
}

export default function BurgerSection(): JSX.Element {
  const { isValid, user } = useSession()
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
      if (nav !== null) {
        nav.style.paddingRight = '47px'
      }
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.paddingRight = '0px'
      if (nav !== null) {
        nav.style.paddingRight = '30px'
      }
    }
    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.paddingRight = '0px'
      if (nav !== null) {
        nav.style.paddingRight = '30px'
      }
    }
  }, [showMenu])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current !== null && !ref.current.contains(event.target as Node)) {
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

  const handleClick = (): void => {
    setShowMenu(!showMenu)
  }

  const handleLogout = (): void => {
    // setShowMenu(!showMenu)
  }

  const handleProfileClick = (): void => {
    // setShowMenu(!showMenu)
  }

  const handleSettingsClick = (): void => {
    // setShowMenu(!showMenu)
  }
  console.log(user)
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
                <div className={styles.listElementContainer}>
                  <Book styleOverride={styleOverrideIcons} />
                  <Link href={''}>Estudio</Link>
                </div>
              </li>
              <li className={styles.sideMenuListItem}>
                <div className={styles.listElementContainer}>
                  <Target styleOverride={styleOverrideIcons} />
                  <Link href={''}>Comunidad</Link>
                </div>
              </li>
              <li className={styles.sideMenuListItem}>
                <div className={styles.listElementContainer}>
                  <Foro styleOverride={styleOverrideIcons} />
                  <Link href={''}>Foro</Link>
                </div>
              </li>
              <li className={styles.sideMenuListItem}>
                <div className={styles.listElementContainer}>
                  <Trophy styleOverride={styleOverrideIcons} />
                  <Link href={''}>Precios</Link>
                </div>
              </li>
              <li className={styles.sideMenuListItem}>
                <div className={styles.listElementContainer}>
                  <Chart styleOverride={styleOverrideIcons} />
                  <Link href={''}>Asistencia</Link>
                </div>
              </li>
              <Divider />
              {!(isValid && user !== null) ? (
                <>
                  <li className={styles.sideMenuListItem}>
                    <div className={styles.listElementContainer}>
                      <Login styleOverride={styleOverrideIcons} />
                      <Link href={'/login'}>Acceder</Link>
                    </div>
                  </li>
                  <li className={styles.sideMenuListItem}>
                    <div className={styles.listElementContainer}>
                      <Register styleOverride={styleOverrideIcons} />
                      <Link href={'/register'}>Registrar</Link>
                    </div>
                  </li>
                </>
              ) : (
                <li className={styles.sideMenuListItem}>
                  <UserHeader
                    userData={user}
                    onLogout={handleLogout}
                    onProfileClick={handleProfileClick}
                    onSettingsClick={handleSettingsClick}
                  />
                </li>
              )}
            </ul>
          </div>,
          document.body
        )}
    </>
  )
}
