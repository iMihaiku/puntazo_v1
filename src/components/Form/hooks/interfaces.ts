export interface FormController<FormValues> {
  form: FormValues
  errors: FormValues
  handleChange: (e: React.ChangeEvent<HTMLFormElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  isValidForm: boolean
  submitResult: any
}
