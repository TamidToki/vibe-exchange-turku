import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { comparePassword, generateToken } from '@/lib/auth'
import { errorResponse, successResponse } from '@/lib/api-helpers'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return errorResponse('Email and password are required')
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return errorResponse('Invalid credentials', 401)
    }

    // Check password
    const isValid = await comparePassword(password, user.password)

    if (!isValid) {
      return errorResponse('Invalid credentials', 401)
    }

    // Generate token
    const token = generateToken({ userId: user.id, email: user.email })

    return successResponse({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        location: user.location,
      },
      token
    })
  } catch (error) {
    console.error('Login error:', error)
    return errorResponse('Internal server error', 500)
  }
}

