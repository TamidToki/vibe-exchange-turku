import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { hashPassword, generateToken } from '@/lib/auth'
import { errorResponse, successResponse } from '@/lib/api-helpers'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name, phone, location } = body

    // Validate input
    if (!email || !password || !name) {
      return errorResponse('Email, password, and name are required')
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return errorResponse('User already exists', 409)
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        phone: phone || null,
        location: location || null,
      }
    })

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
    console.error('Registration error:', error)
    return errorResponse('Internal server error', 500)
  }
}

