import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from './auth'

export async function withAuth(req: NextRequest, handler: (req: NextRequest, userId: string) => Promise<NextResponse>) {
  try {
    const token = req.headers.get('authorization')?.replace('Bearer ', '')
    
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = verifyToken(token)
    return handler(req, payload.userId)
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
}

export function successResponse(data: any, status = 200) {
  return NextResponse.json(data, { status })
}

export function errorResponse(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status })
}

