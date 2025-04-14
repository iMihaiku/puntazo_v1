import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

interface SessionResponse {
  isValid: boolean
  name: string
  email: string
  role: string
}

export async function GET(): Promise<NextResponse> {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('session_token')

  if (sessionCookie?.value === null || sessionCookie?.value === undefined) {
    return NextResponse.json({ isValid: false, user: null }, { status: 200 })
  }

  try {
    const backendResponse = await fetch('http://localhost:8080/users/session', {
      method: 'GET',
      headers: {
        Cookie: `session_token=${sessionCookie.value}`
      }
    })

    if (!backendResponse.ok) {
      cookieStore.delete('session_token')
      return NextResponse.json({ isValid: false }, { status: 401 })
    }
    const sessionData: SessionResponse = await backendResponse.json()
    if (!sessionData.isValid) {
      cookieStore.delete('session_token')
      return NextResponse.json({ isValid: false }, { status: 401 })
    }
    return NextResponse.json(sessionData, { status: 200 })
  } catch (error) {
    console.error('Error verifying session:', error)
    return NextResponse.json(
      { isValid: false, user: null },
      { status: 500 }
    )
  }
}

export async function DELETE(): Promise<NextResponse> {
  const cookieStore = await cookies()

  cookieStore.delete('session_token')

  return NextResponse.json({ success: true })
}
