/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/promise-function-async */
'use client'

import styles from './register.module.css'
import stylesDefault from '../formStyles.module.css'
import { TextField } from '@mui/material'
import Divider from '@/components/Divider/Divider'
import Button from '@/components/Button/Button'
import Logo from '@/components/Logo/Logo'
import Facebook from '@/components/Icon/Facebook'
import Google from '@/components/Icon/Google'
import Apple from '@/components/Icon/Apple'
import { useRouter } from 'next/navigation'
import { useRegister } from './useRegister'
import { useEffect } from 'react'
import { useToast, ToastType } from '@/components/Toast/useContextToast'

const buttonStyleOverride = {
  fontSize: '19px',
  padding: '14px 20px',
  width: '100%'
}
export default function RegisterForm(): JSX.Element {
  const { showToast } = useToast()
  const router = useRouter()
  const {
    form,
    errors,
    handleChange,
    handleSubmit,
    isValidForm,
    submitResult
  } = useRegister()

  useEffect(() => {
    if (submitResult instanceof Error) {
      showToast({
        message: submitResult.message,
        type: ToastType.ERROR,
        duration: 5000
      })
    } else if (submitResult !== null && submitResult !== undefined) {
      router.replace(submitResult.url)
    }
  }, [router, submitResult])

  const handleSocial = async (e): Promise<void> => {
    e.preventDefault()
    const social = e.currentTarget.name
    console.log(`Log in with ${social}`)
    fetch(`http://localhost:8080/users/oauth/${social}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((data) => {
        router.replace(data.url)
      })
      .catch((err) => {
        showToast({
          message: 'Error al iniciar sesión con ' + social,
          type: ToastType.ERROR,
          duration: 5000
        })
        console.log('Error en OAuth:', err)
      })
  }
  return (
    <form
      className={stylesDefault.formDefault + ' ' + styles.form}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <section className={styles.formHeader}>
        <Logo />
        <h2>Regístrate gratis</h2>
        <p>¡Únete a la comunidad de SkillCheck!</p>
      </section>
      <section className={styles.formSocial}>
        <button
          name="facebook"
          style={{ backgroundColor: '#3b5998' }}
          onClick={handleSocial}
        >
          <Facebook />
        </button>
        <button
          name="google"
          style={{ backgroundColor: 'white', border: '2px solid #ebeaec' }}
          onClick={handleSocial}
        >
          <Google />
        </button>
        <button
          name="apple"
          style={{ backgroundColor: '#575757', cursor: 'not-allowed' }}
          onClick={handleSocial}
          disabled
        >
          <Apple />
        </button>
      </section>
      <Divider
        styleOverride={{ borderColor: 'rgb(44, 44, 44)', margin: '15px 0' }}
      />
      <div className={styles.formFields}>
        <TextField
          name="email"
          value={form.email}
          type="email"
          label="Correo"
          variant="outlined"
          size="small"
          helperText={errors.email}
          error={errors.email.length > 1}
        />
        <TextField
          name="name"
          value={form.name}
          type="text"
          label="Nombre"
          variant="outlined"
          size="small"
          helperText={errors.name}
          error={errors.name.length > 1}
        />
        <TextField
          name="lastName"
          value={form.lastName}
          type="text"
          label="Apellido"
          variant="outlined"
          size="small"
          helperText={errors.lastName}
          error={errors.lastName.length > 1}
        />
        <TextField
          name="password"
          value={form.password}
          type="password"
          label="Contraseña"
          variant="outlined"
          size="small"
          helperText={errors.password}
          error={errors.password.length > 1}
        />
        <TextField
          name="confirmPassword"
          value={form.confirmPassword}
          type="password"
          label="Confirmar contraseña"
          variant="outlined"
          size="small"
          helperText={errors.confirmPassword}
          error={errors.confirmPassword.length > 1}
        />
      </div>

      <Button
        styleOverride={buttonStyleOverride}
        type="submit"
        className={isValidForm ? styles.submitEnable : styles.submitDisabled}
      >
        Registrarse
      </Button>
    </form>
  )
}
