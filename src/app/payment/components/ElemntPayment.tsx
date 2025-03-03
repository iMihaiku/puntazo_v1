'use client'

import {
  ExpressCheckoutElement,
  PaymentElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js'

export function ElementPayment(): JSX.Element {
  const stripe = useStripe()
  const elements = useElements()
  const handleConfirm = async (e): Promise<void> => {
    e.preventDefault()
    if (stripe === null || elements === null) {
      return
    }

    const { error: submitError } = await elements.submit()

    if (submitError !== null) {
      console.error(submitError)
      return
    }

    await stripe.confirmPayment({
      elements,
      clientSecret:
        'pi_3QgQSwQLfehfJS4W1gtm2Mmi_secret_sRZx358JLCS4dFaaA2VP9JeXO',
      confirmParams: {
        return_url: 'http://localhost:3000/payment-success?amount=200'
      }
    })
  }
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleConfirm}>
      <PaymentElement />
      <ExpressCheckoutElement
        onConfirm={(e) => {
          console.log(e)
        }}
      />
      <button>Submit</button>
    </form>
  )
}
