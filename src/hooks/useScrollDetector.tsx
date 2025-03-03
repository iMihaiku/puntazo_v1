/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import debouncer from '@/lib/debouncer'
import { useEffect, useState } from 'react'

function useScrollDetector(): boolean | undefined {
  const [scrolled, setScrolled] = useState<boolean | undefined>()
  const [firstLoad, setFirstLoad] = useState(true)

  useEffect(() => {
    const handleScroll = (): void => {
      const offset = window?.scrollY
      offset > 0 ? setScrolled(true) : setScrolled(false)
    }
    if (firstLoad) {
      setFirstLoad(false)
      handleScroll()
    }
    window.addEventListener('scroll', debouncer(handleScroll, 10))
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return scrolled
}

export default useScrollDetector
