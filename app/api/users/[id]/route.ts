import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { successResponse, errorResponse } from '@/lib/api-helpers'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        name: true,
        email: true,
        location: true,
        bio: true,
        avatar: true,
        followerCount: true,
        followingCount: true,
        createdAt: true
      }
    })

    if (!user) {
      return errorResponse('User not found', 404)
    }

    // Get user's listings
    const listings = await prisma.listing.findMany({
      where: { 
        userId: params.id,
        sold: false
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return successResponse({ user, listings })
  } catch (error) {
    console.error('Error fetching user:', error)
    return errorResponse('Failed to fetch user', 500)
  }
}

