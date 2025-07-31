import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  if (!body || Object.keys(body).length === 0) {
    return NextResponse.json({ error: 'Missing user type!' }, { status: 400 })
  }

  const userType: string = body.params.userType

  if (!userType) {
    return NextResponse.json({ error: 'Missing user type!' }, { status: 400 })
  }

  const cookieStore = await cookies()

  const userTypeFromCookie = cookieStore.get('authUser')

  if (!userTypeFromCookie) {
    return NextResponse.json({ error: 'Log in to log out!' }, { status: 400 })
  }

  if (userTypeFromCookie.value !== userType) {
    return NextResponse.json(
      { error: 'Not right access to log out!' },
      { status: 403 }
    )
  }

  cookieStore.delete('authUser')

  return NextResponse.json(
    { error: 'Successfully logged out!' },
    { status: 200 }
  )
}
