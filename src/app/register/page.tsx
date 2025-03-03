'use client'
import RegisterForm from '@/components/Form/Register/RegisterForm'
import styles from './page.module.css'

export default function Page() {
  return (
      <section className={styles.register}>
        <div className={styles.blurContainer}></div>
        <RegisterForm />
      </section>
  )
}