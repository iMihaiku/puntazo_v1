'use client'
import styles from './nav.module.css'

export default function SideMenu({showMenu}) {
  return (
    <div className={showMenu ? styles.sideMenu : ''}>
      <ul
        className={showMenu ? styles.sideMenuShown : styles.sideMenuHidden}
      >
        <li>Estudio</li>
        <li>Comunidad</li>
        <li>Foro</li>
        <li>Precios</li>
        <li>Asistencia</li>
      </ul>
    </div>
  )
}
