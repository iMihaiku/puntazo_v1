import { cookies } from 'next/headers'
import AnimatedText from '../Animation/AnimatedWord'
import Button from '../Button/Button'
import ButtonReverse from '../Button/ButtonReverse'
import SparkAI from '../Icon/Spark'
import style from './component.module.css'
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
  const handleTest = async () => {
    'use server'
    const token = (await cookies()).get('session_token')?.value

    if (!token) {
      console.error('Token no encontrado')
      return
    }

    fetch('http://localhost:8080/users/test', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
       }
    })
      .then((res) => {
        console.log(res.status)
      })
      .then((data) => {})
      .catch((err) => console.error('Error en OAuth:', err))
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
