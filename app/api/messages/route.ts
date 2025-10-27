import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { withAuth } from '@/lib/api-helpers'
import { successResponse, errorResponse } from '@/lib/api-helpers'

export async function GET(request: NextRequest) {
  return withAuth(request, async (req, userId) => {
    try {
      const messages = await prisma.message.findMany({
        where: {
          OR: [
            { senderId: userId },
            { receiverId: userId }
          ]
        },
        include: {
          sender: {
            select: {
              id: true,
              name: true,
              avatar: true
            }
          },
          receiver: {
            select: {
              id: true,
              name: true,
              avatar: true
            }
          },
          listing: {
            select: {
              id: true,
              title: true,
              price: true,
              images: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      })

      return successResponse({ messages })
    } catch (error) {
      console.error('Error fetching messages:', error)
      return errorResponse('Failed to fetch messages', 500)
    }
  })
}

export async function POST(request: NextRequest) {
  return withAuth(request, async (req, senderId) => {
    try {
      const body = await req.json()
      const { content, listingId, receiverId } = body

      if (!content || !listingId || !receiverId) {
        return errorResponse('Missing required fields')
      }

      const message = await prisma.message.create({
        data: {
          content,
          listingId,
          senderId,
          receiverId
        },
        include: {
          sender: {
            select: {
              id: true,
              name: true,
              avatar: true
            }
          },
          receiver: {
            select: {
              id: true,
              name: true,
              avatar: true
            }
          },
          listing: {
            select: {
              id: true,
              title: true,
              price: true,
              images: true
            }
          }
        }
      })

      return successResponse({ message }, 201)
    } catch (error) {
      console.error('Error creating message:', error)
      return errorResponse('Failed to send message', 500)
    }
  })
}

