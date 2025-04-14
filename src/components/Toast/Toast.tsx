import { useEffect, useState } from 'react'
import { type ToastProps } from './inteface'
import styles from './component.module.css'
import { ToastType } from './useContextToast'
import Error from '../Icon/Error'
import Success from '../Icon/Success'
import Alert from '../Icon/Alert'

const overrideIconStyle = {
  size: { width: '40px', height: '40px' }
}
const TOAST_BACKGROUNDS = {
  [ToastType.SUCCESS]: '#61db66',
  [ToastType.ERROR]: '#df3d31',
  [ToastType.WARNING]: '#ebba00',
  [ToastType.INFO]: '#44adeb'
} as const
const TOAST_TITLE = {
  [ToastType.SUCCESS]: '¡Exito!',
  [ToastType.ERROR]: '¡Error!',
  [ToastType.WARNING]: '¡Advertencia!',
  [ToastType.INFO]: 'Información'
} as const
const TOAST_ICON = {
  [ToastType.SUCCESS]: <Success styleOverride={overrideIconStyle} />,
  [ToastType.ERROR]: <Error styleOverride={overrideIconStyle} />,
  [ToastType.WARNING]: <Alert styleOverride={overrideIconStyle} />,
  [ToastType.INFO]: <Success styleOverride={overrideIconStyle} />
} as const
export default function Toast(props: ToastProps): JSX.Element | null {
  const { message, type, duration = 3000, onClose } = props
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const [isHiding, setIsHiding] = useState<boolean>(false)
  const styleOverride = {
    background: type !== undefined ? TOAST_BACKGROUNDS[type] : '#838e97'
  }
  const progressStyle = {
    animationDuration: `${duration}ms`
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose()
    }, duration)

    return () => {
      clearTimeout(timer)
    }
  }, [duration])

  const handleClose = (): void => {
    setIsHiding(true)
    setTimeout(() => {
      setIsVisible(false)
      if (onClose !== undefined) onClose()
    }, 500)
  }

  if (!isVisible) return null

  return (
    <div className={styles.toastWrapper}>
      <div
        className={`${styles.toastContainer} ${isHiding ? styles.hiding : ''}`}
        data-type={type}
        style={styleOverride}
      >
        <div className={styles.toastBody}>
          <div className={styles.toastIcon}>
            {type !== undefined ? TOAST_ICON[type] : <Error />}
          </div>
          <div className={styles.toastContent}>
            <h3>
              {type !== undefined ? TOAST_TITLE[type] : 'Algo malio sal 😿'}
            </h3>
            <span>{message}</span>
          </div>
        </div>
        <div
          className={`${styles.toastLoad} ${styles.toastLoadAnimation}`}
          style={progressStyle}
        ></div>
      </div>
    </div>
  )
}
