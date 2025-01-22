'use client'
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { ElementPayment } from './components/ElemntPayment'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)
export default function Page(): JSX.Element {
  const options = {
    clientSecret: 'pi_3QgQSwQLfehfJS4W1gtm2Mmi_secret_sRZx358JLCS4dFaaA2VP9JeXO'
  }
  
  return (
    <Elements stripe={stripePromise} options={options}>
      <ElementPayment />
    </Elements>
  )
}
