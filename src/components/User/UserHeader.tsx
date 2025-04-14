import React, { useState } from 'react'
import styles from './component.module.css'
// Interfaces para tipado
interface UserData {
  id: string
  name: string
  email: string
  avatarUrl?: string
}

interface UserHeaderProps {
  userData: UserData
  onLogout: () => void
  onProfileClick: () => void
  onSettingsClick: () => void
}

export const UserHeader: React.FC<UserHeaderProps> = ({
  userData,
  onLogout,
  onProfileClick,
  onSettingsClick
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  const handleMenuOption = (callback: () => void): void => {
    closeMenu()
    callback()
  }

  const userInitials = userData.name
    .split(' ')
    .map((name) => name[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)

  return (
    <>
      <div className={styles.userBody} onClick={toggleMenu}>
        <div className={styles.avatar}>
          {userData.avatarUrl !== undefined ? (
            <img src={userData.avatarUrl} alt={userData.name} />
          ) : (
            userInitials
          )}
        </div>
        <span className={styles.userName}>{userData.name}</span>
      </div>

      {isMenuOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.menuHeader}>
            <div>{userData.name}</div>
            <div className={styles.menuHeaderEmail}>{userData.email}</div>
          </div>

          <div
            className={styles.menuOption}
            onClick={() => {
              handleMenuOption(onProfileClick)
            }}
          >
            <span className={styles.menuIcon}>👤</span>
            Mi Perfil
          </div>

          <div
            className={styles.menuOption}
            onClick={() => {
              handleMenuOption(onSettingsClick)
            }}
          >
            <span className={styles.menuIcon}>⚙️</span>
            Configuración
          </div>

          <div
            className={`${styles.menuOption} ${styles.logout}`}
            onClick={() => {
              handleMenuOption(onLogout)
            }}
          >
            <span className="menuIcon">↪️</span>
            Cerrar Sesión
          </div>
        </div>
      )}
    </>
  )
}
