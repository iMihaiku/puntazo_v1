'use client'
import { useState } from 'react'
import Toast from '@/components/Toast/Toast'
import { type ToastProps } from '@/components/Toast/inteface'
import { ToastContext } from './useContextToast'

export const ToastProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [toast, setToast] = useState<ToastProps | null>()
  const [key, setKey] = useState<number>(0)

  const showToast = (options: Omit<ToastProps, 'onClose'>): void => {
    setKey(prev => prev + 1)

    setToast({
      ...options,
      onClose: () => {
        setToast(null)
      }
    })
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast !== null && toast !== undefined && <Toast key={key} {...toast} />}
    </ToastContext.Provider>
  )
}
