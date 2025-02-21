'use client'
import debouncer from '@/lib/debouncer'
import { createContext, useLayoutEffect, useState } from 'react'

const DeviceContext = createContext<string | undefined>(undefined)

const DeviceProvider = ({ children }) => {
  const [device, setDevice] = useState<string>()
  const [firstLoad, setFirstLoad] = useState(true)

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setDevice(getDeviceType())
    }
    window.addEventListener('resize', debouncer(updateSize, 150))
    if (firstLoad) {
      updateSize()
      setFirstLoad(false)
    }
    return (): void => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  )
}

const getDeviceType = () => {
  const width = window.innerWidth
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

export { DeviceProvider, DeviceContext }
