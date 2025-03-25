'use client'
import { useCallback } from 'react'
import useControlForm from '../hooks/useControlForm'
import { type FormRegisterValues } from './interfaces'
import { type FormController } from '../hooks/interfaces'

export const useRegister = (): FormController<FormRegisterValues> => {
  // Definimos el template del formulario
  
  const formTemplate: FormRegisterValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const handleRegisterSubmit = useCallback(
    async (formData: FormRegisterValues): Promise<void> => {
      try {
        console.log('Enviando datos de registro:', formData)

        const result = await fetch('http://localhost:8080/users/register', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then((res) => res.json())
          .then((data) => {
            return data
          })
          .catch((err) => {
            console.error('Error en el registro:', err)
          })
          console.log('Resultado del registro:', result)
       return result
      } catch (error) {
        console.error('Error al registrar usuario:', error)
      }
    },
    []
  )

  const registerForm = useControlForm<FormRegisterValues>(
    formTemplate,
    validateInput,
    handleRegisterSubmit
  )

  return registerForm
}

function validateInput(
  name: string,
  value: string,
  formRef
): Array<{ name: string; value: string }> {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
  const validations: Array<{ name: string; value: string }> = []
  let res
  switch (name) {
    case 'email':
      res = !emailRegex.test(value)
        ? { name, value: 'Direccion de correo inválida' }
        : { name, value: ' ' }
      validations.push(res)
      break
    case 'name':
      res =
        value.length < 3
          ? { name, value: 'Nombre demasiado corto' }
          : { name, value: ' ' }
      validations.push(res)
      break
    case 'lastName':
      res =
        value.length < 3
          ? { name, value: 'Apellidos demasiado cortos' }
          : { name, value: ' ' }
      validations.push(res)
      break
    case 'password':
      res = !passwordRegex.test(value)
        ? {
            name,
            value:
              'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número'
          }
        : { name, value: ' ' }

      validations.push(res)

      res =
        formRef.confirmPassword !== '' && formRef.confirmPassword !== value
          ? {
              name: 'confirmPassword',
              value: 'Las contraseñas no coinciden'
            }
          : { name: 'confirmPassword', value: ' ' }
      validations.push(res)

      break
    case 'confirmPassword':
      res =
        value !== formRef.password
          ? { name, value: 'Las contraseñas no coinciden' }
          : { name, value: ' ' }
      validations.push(res)
      break
    default:
      break
  }
  return validations
}
