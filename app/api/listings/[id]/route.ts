import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { successResponse, errorResponse } from '@/lib/api-helpers'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const listing = await prisma.listing.findUnique({
      where: { id: params.id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            location: true,
            avatar: true,
            followerCount: true,
            followingCount: true
          }
        }
      }
    })

    if (!listing) {
      return errorResponse('Listing not found', 404)
    }

    return successResponse({ listing })
  } catch (error) {
    console.error('Error fetching listing:', error)
    return errorResponse('Failed to fetch listing', 500)
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()

    const listing = await prisma.listing.update({
      where: { id: params.id },
      data: body,
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

    return successResponse({ listing })
  } catch (error) {
    console.error('Error updating listing:', error)
    return errorResponse('Failed to update listing', 500)
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.listing.delete({
      where: { id: params.id }
    })

    return successResponse({ message: 'Listing deleted' })
  } catch (error) {
    console.error('Error deleting listing:', error)
    return errorResponse('Failed to delete listing', 500)
  }
}

