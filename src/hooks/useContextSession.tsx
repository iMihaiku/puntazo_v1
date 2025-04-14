'use client'
import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
  useRef
} from 'react'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole | undefined
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export interface SessionState {
  user: User | null
  isValid: boolean
  isLoading: boolean
}

interface SessionContextType extends SessionState {
  login: (user: User) => void
  logout: () => void
  updateUser: (user: Partial<User>) => void
}

/** SESSION CONTEXT CREATE */

export const SessionContext = createContext<SessionContextType | undefined>(
  undefined
)

export const useSession = (): SessionContextType => {
  const context = useContext(SessionContext)
  if (context === undefined) {
    throw new Error('useSession debe usarse dentro de un SessionProvider')
  }
  return context
}

/** SESSION CONTEXT PROVIDER */

export function SessionProvider({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const [state, setState] = useState<SessionState>({
    user: null,
    isValid: false,
    isLoading: true
  })
  const initialCheckDone = useRef(false)
  // Verificar sesión al montar el componente
  useEffect(() => {
    console.log(initialCheckDone.current)
    if (initialCheckDone.current) return
    const checkSession = async (): Promise<void> => {
      try {
        const response = await fetch('/api/auth/session', {
          credentials: 'include'
        })
        if (response.ok) {
          const {
            userId: id,
            email,
            name,
            role,
            isValid
          } = await response.json()
          setState({
            user: {
              id,
              email,
              name,
              role
            },
            isValid,
            isLoading: false
          })
        } else {
          setState((prev) => ({ ...prev, isLoading: false }))
        }
      } catch (error) {
        console.error('Error al verificar sesión:', error)
        setState((prev) => ({ ...prev, isLoading: false }))
      }
      initialCheckDone.current = true
    }
    void checkSession()
  }, [])

  const login = useCallback((user: User) => {
    setState({
      user,
      isValid: true,
      isLoading: false
    })
  }, [])

  const logout = useCallback(async () => {
    try {
      await fetch('/api/auth/session', {
        method: 'DELETE',
        credentials: 'include'
      })

      setState({
        user: null,
        isValid: false,
        isLoading: false
      })
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }, [])

  const updateUser = useCallback((userData: Partial<User>) => {
    setState((prev) => ({
      ...prev,
      user: prev.user !== null ? { ...prev.user, ...userData } : null
    }))
  }, [])

  return (
    <SessionContext.Provider
      value={{
        ...state,
        login,
        logout: () => {
          void logout()
        },
        updateUser
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}
