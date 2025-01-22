'use client'

import { ExpressCheckoutElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'

export function ElementPayment(): JSX.Element {
  const stripe = useStripe()
  const elements = useElements()
  const handleConfirm = async (e) => {
    e.preventDefault()
    if(!stripe || !elements){
      return
    }

    const { error: submitError } = await elements.submit()

    if (submitError) {
      console.error(submitError)
      return
    }


    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret:'pi_3QgQSwQLfehfJS4W1gtm2Mmi_secret_sRZx358JLCS4dFaaA2VP9JeXO',
      confirmParams: {
        return_url: `http://localhost:3000/payment-success?amount=200`
      }
    })
  }
  return (
    <form onSubmit={handleConfirm}>
      <PaymentElement />
      <ExpressCheckoutElement onConfirm={(e)=>{
        console.log(e)
      }}/>
      <button>Submit</button>
    </form>
  )
}
