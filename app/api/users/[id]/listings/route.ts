import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { successResponse, errorResponse } from '@/lib/api-helpers'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const listings = await prisma.listing.findMany({
      where: { userId: params.id },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            location: true
          }
        }
      }
    })

    return successResponse({ listings })
  } catch (error) {
    console.error('Error fetching user listings:', error)
    return errorResponse('Failed to fetch listings', 500)
  }
}

