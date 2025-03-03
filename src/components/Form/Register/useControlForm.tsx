/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useCallback, useReducer } from 'react'

const defaultForm = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  confirmPassword: ''
}
const defaultErrors = {
  email: ' ',
  firstName: ' ',
  lastName: ' ',
  password: ' ',
  confirmPassword: ' '
}
function formReducer(state, action): any {
  return {
    ...state,
    [action.name]: action.value
  }
}
function errorsReducer(state, action): any {
  return {
    ...state,
    [action.name]: action.value
  }
}

export default function useControlRegisterForm(): any {
  const [form, dispatch] = useReducer(formReducer, defaultForm)
  const [errors, dispatchErrors] = useReducer(errorsReducer, defaultErrors)

  const handleChange = useCallback(
    (e) => {
      dispatch({ name: e.target.name, value: e.target.value })
      validateInput(e.target.name, e.target.value, e)
    },
    [form]
  )
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
    },
    [form]
  )
  const validateInput = (name, value, eForm): any => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    const formValue = eForm.target.form
    let res
    switch (name) {
      case 'email':
        res = !emailRegex.test(value)
          ? { name, value: 'Direccion de correo inválida' }
          : { name, value: ' ' }
        break
      case 'firstName':
        res =
          value.length < 3
            ? { name, value: 'Nombre demasiado corto' }
            : { name, value: ' ' }
        break
      case 'lastName':
        res =
          value.length < 3
            ? { name, value: 'Apellidos demasiado cortos' }
            : { name, value: ' ' }
        break
      case 'password':
        res = !passwordRegex.test(value)
          ? {
              name,
              value:
                'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número'
            }
          : { name, value: ' ' }
        dispatchErrors(res)
        res =
          value !== formValue.confirmPassword.value
            ? { name: 'confirmPassword', value: 'Las contraseñas no coinciden' }
            : { name: 'confirmPassword', value: ' ' }
        break
      case 'confirmPassword':
        res =
          value !== formValue.password.value
            ? { name, value: 'Las contraseñas no coinciden' }
            : { name, value: ' ' }
        break
      default:
        break
    }
    dispatchErrors(res)
  }
  return { form, errors, handleChange, handleSubmit }
}
