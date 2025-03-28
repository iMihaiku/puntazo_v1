import { createContext, useContext } from 'react'
import { type ToastProps } from '@/components/Toast/inteface'

interface ToastContextType {
  showToast: (options: Omit<ToastProps, 'onClose'>) => void
}

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
)

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast debe usarse dentro de un ToastProvider')
  }
  return context
}
