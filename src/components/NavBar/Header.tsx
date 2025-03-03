import Link from 'next/link'
import styles from './nav.module.css'
import NavBar from './NavBar'
import BurgerSection from './BurgerSection.client'
import Logo from '@/components/Logo/Logo'
import ButtonLink from '../Button/ButtonLink'
import ButtonLinkReverse from '../Button/ButtonLinkReverse'

export default async function Header(): Promise<JSX.Element> {
  return (
    <>
      <header className={styles.header}>
        <NavBar>
          <div className={styles.navSectionsBlock}>
            <Logo />
            <NavigationSections />
          </div>
          <div
            className={
              styles.navSectionsBlock + ' ' + styles.navSectionsBlockRight
            }
          >
            <SessionSection />
            <BurgerSection />
          </div>
        </NavBar>
      </header>
    </>
  )
}

function NavigationSections(): JSX.Element {
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

function SessionSection(): JSX.Element {
  const styleOverride = {
    padding: '10px 20px',
    cursor: 'pointer'
  }
  return (
    <div className={styles.navSession}>
      <ButtonLinkReverse styleOverride={styleOverride} href={'/login'}>
        Login
      </ButtonLinkReverse>
      <ButtonLink styleOverride={styleOverride} href={'/register'}>
        Register
      </ButtonLink>
    </div>
  )
}
