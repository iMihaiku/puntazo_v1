export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}

export interface ToastProps {
  message: string
  type?: ToastType
  duration?: number
  onClose?: () => void
}
