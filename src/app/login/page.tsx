'use client'
import LoginForm from '@/components/Form/Login/LoginForm'
import styles from './page.module.css'

export default function Page(): JSX.Element {
  return (
    <section className={styles.register}>
      <div className={styles.blurContainer}></div>
      <LoginForm />
    </section>
  )
}
