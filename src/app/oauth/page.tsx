'use client'

import { useEffect } from 'react'

export default function Page(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      window.close()
    }, 1000)
  }, [])
  return <div></div>
}
