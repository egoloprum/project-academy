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
  cookieStore.set('authUser', userType)

  return NextResponse.json(
    { error: 'Successfully logged in!' },
    { status: 200 }
  )
}
