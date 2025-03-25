/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/promise-function-async */
import { cookies } from 'next/headers'
import AnimatedText from '../Animation/AnimatedWord'
import Button from '../Button/Button'
import SparkAI from '../Icon/Spark'
import style from './component.module.css'
import { redirect } from 'next/navigation'

export default function Introduction(): JSX.Element {
  const sparkStyleOverride = {
    customStyle: {
      top: '7px',
      right: '7px',
      margin: 'auto'
    },
    size: {
      width: '24px',
      height: '24px'
    },
    fill: '#fff'
  }
  const handleTest = async (): Promise<void> => {
    'use server'
    const token = (await cookies()).get('session_token')?.value

    if (token === null) {
      console.error('Token no encontrado')
      return
    }

    const result = await fetch('http://localhost:8080/users/test', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        return data
      })
      .catch((err) => {
        return err
      })
    redirect(result.url)
  }
  return (
    <div className={style.presentationContainer}>
      <h1>
        Aprende y Evalúa de Forma <AnimatedText />
      </h1>

      <p>
        Plataforma especializada en creación y resolución de ejercicios tipo
        test. Mejora tu aprendizaje con métodos educativos probados.
      </p>
      <Button action={handleTest}>
        ¡Comenzar ahora!
        <SparkAI styleOverride={sparkStyleOverride} />
      </Button>
    </div>
  )
}
