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
import useControlRegisterForm from './useControlForm'
import { useRouter } from 'next/navigation'

const buttonStyleOverride = {
  fontSize: '19px',
  padding: '14px 20px',
  width: '100%'
}
export default function RegisterForm() {
  const router = useRouter()
  const { form, errors, handleChange, handleSubmit } = useControlRegisterForm()
  
  const handleSocial = async (e) => {
    console.log('handleSocial', e.currentTarget.name)
    e.preventDefault
    const social = e.currentTarget.name
    console.log(`Log in with ${social}`)
    fetch(`http://localhost:8080/users/oauth/${social}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((data) => {
        // lets redirect to the oauth page
        router.replace(data.url)

      })
      .catch((err) => console.error('Error en OAuth:', err))
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
          name="firstName"
          value={form.firstName}
          type="text"
          label="Nombre"
          variant="outlined"
          size="small"
          helperText={errors.firstName}
          error={errors.firstName.length > 1}
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

      <Button styleOverride={buttonStyleOverride} type="submit">
        Registrarse
      </Button>
    </form>
  )
}
