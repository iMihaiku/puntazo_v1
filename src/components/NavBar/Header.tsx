import Link from 'next/link'
import styles from './nav.module.css'
import NavBar from './NavBar'
import localFont from 'next/font/local'
import ButtonReverse from '../Button/ButtonReverse'
import Button from '../Button/Button'

const rocketFont = localFont({ src: '../../resources/ROCKET WILDNESS.ttf' })
export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <NavBar>
        <Logo />
        <NavigationSections />
        <SessionSection />
      </NavBar>
    </header>
  )
}

function Logo() {
  return (
    <div className={rocketFont.className} id={styles.navLogo}>
      <span>Skill</span>
      <span>Check</span>
    </div>
  )
}

function NavigationSections() {
  return (
    <div className={styles.navLinks}>
      <Link href={'/home'}>Estudio</Link>
      <Link href={''}>Comunidad</Link>
      <Link href={''}>Foro</Link>
      <Link href={'/payment'}>Precios</Link>
      <Link href={'/about'}>Asistencia</Link>
    </div>
  )
}

function SessionSection() {
  const styleOverride = {
    borderRadius: '0px',
    padding: '10px 20px'
  }
  return (
    <div className={styles.navSession}>
      <ButtonReverse styleOverride={styleOverride}>
        <Link href={''} className={styles.login}>
          Login
        </Link>
      </ButtonReverse>
      <Button styleOverride={styleOverride}>
        <Link href={''} className={styles.signin}>
          Sign In
        </Link>
      </Button>
    </div>
  )
}
