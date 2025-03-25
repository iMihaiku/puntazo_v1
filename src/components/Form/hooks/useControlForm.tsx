import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} from 'react'
import { type FormController } from './interfaces'

function formReducer<T>(
  state: T,
  action: {
    name: keyof T
    value: string
  }
): any {
  return {
    ...state,
    [action.name]: action.value
  }
}
function errorsReducer<T>(
  state: T,
  action: {
    name: keyof T
    value: string
  }
): any {
  return {
    ...state,
    [action.name]: action.value
  }
}
function createInitialState<T extends Record<string, string>>(
  template: T,
  defaultValue: string
): T {
  const initialState: any = {}
  Object.keys(template).forEach((key) => {
    initialState[key as keyof T] = defaultValue
  })
  return initialState as T
}

export default function useControlForm<
  FormValues extends Record<string, string>
>(
  template: FormValues,
  validateInput: (
    name: keyof FormValues,
    value: string,
    form: FormValues
  ) => Array<{ name: string; value: string }>,
  onSubmit: (form: FormValues) => Promise<void>
): FormController<FormValues> {
  console.log('useControlForm')
  const defaultForm = useMemo(
    () => createInitialState<FormValues>(template, ''),
    []
  )
  const defaultErrors = useMemo(
    () => createInitialState<FormValues>(template, ' '),
    []
  )
  const [submitResult, setSubmitResult] = useState<any>(null)
  const [form, dispatch] = useReducer(formReducer<FormValues>, defaultForm)
  const [errors, dispatchErrors] = useReducer(
    errorsReducer<FormValues>,
    defaultErrors
  )
  const [isValidForm, setValidForm] = useState<boolean>(false)

  const formRef = useRef(form)

  useEffect(() => {
    formRef.current = form
  }, [form])

  const handleChange = useCallback(
    (e) => {
      dispatch({ name: e.target.name, value: e.target.value })
      const validationResult = validateInput(
        e.target.name,
        e.target.value,
        formRef.current
      )

      validationResult.forEach((error) => {
        dispatchErrors({
          name: error.name,
          value: error.value
        })
      })
    },
    [validateInput]
  )

  useEffect(() => {
    const anyError = Object.values(errors).every((error) => error === ' ')
    const anyEmpty = Object.values(form).some((value) => value === '')
    setValidForm(anyError && !anyEmpty)
  }, [form])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      if (!isValidForm) {
        // FUTURO TOAST ALERT
        console.log('Formulario inválido', isValidForm)
        return
      }
      try {
        const result = await onSubmit(form)
        setSubmitResult(result)
      } catch (error) {
        console.error('Error al enviar formulario:', error)
      }
    },
    [form, isValidForm]
  )
  return { form, errors, handleChange, handleSubmit, isValidForm, submitResult }
}
