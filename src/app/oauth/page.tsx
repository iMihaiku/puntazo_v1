'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {
  const router = useSearchParams()
  const status = router.get('state')
  useEffect(() => {
    // Cerrar la pestaña después de un breve retraso para asegurar que el estado se haya leído
    setTimeout(() => {
      window.close()
    }, 1000)
  }, [])
  return <div>{status}</div>
}
