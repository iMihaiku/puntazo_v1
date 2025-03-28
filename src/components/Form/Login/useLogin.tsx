'use client'
import { useCallback } from 'react'
import useControlForm from '../hooks/useControlForm'
import { type FormValues } from './interfaces'
import { type FormController } from '../hooks/interfaces'

export const useLogin = (): FormController<FormValues> => {
  // Definimos el template del formulario
  const formTemplate: FormValues = {
    email: '',
    password: ''
  }

  const handleSubmit = useCallback(
    async (formData: FormValues): Promise<Response | Error> => {
      try {
        console.log('Enviando datos de registro:', formData)

        const result: Response = await fetch(
          'http://localhost:8080/users/login',
          {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          }
        )
          .then((res) => {
            if (res.status === 200) {
              return res.json()
            }
            if (res.status === 400) {
              throw new Error('Datos inválidos: Algunos caracteres no estan permitidos')
            }
            if (res.status === 401) {
              throw new Error('Las credenciales no son validas')
            }
          })
          .then((data) => {
            return data
          })
          .catch((err: Error) => {
            if (err.message === 'Failed to fetch') {
              throw new Error('El servidor no esta disponible')
            }
            throw new Error(err.message)
          })
        console.log('Resultado del acceso:', result)
        return result
      } catch (error) {
        return error
      }
    },
    []
  )

  const form = useControlForm<FormValues>(
    formTemplate,
    validateInput,
    handleSubmit
  )

  return form
}

function validateInput(
  name: string,
  value: string,
  formRef
): Array<{ name: string; value: string }> {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
  const validations: Array<{ name: string; value: string }> = []
  let res: { name: string; value: string }
  switch (name) {
    case 'email':
      res = !emailRegex.test(value)
        ? { name, value: 'Direccion de correo inválida' }
        : { name, value: ' ' }
      validations.push(res)
      break
    case 'password':
      res = !passwordRegex.test(value)
        ? { name, value: 'La contraseña tiene un formato no valido' }
        : { name, value: ' ' }
      validations.push(res)
      break
    default:
      break
  }
  return validations
}
