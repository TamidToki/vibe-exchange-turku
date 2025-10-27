import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { withAuth } from '@/lib/api-helpers'
import { successResponse, errorResponse } from '@/lib/api-helpers'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const location = searchParams.get('location')
    const priceMin = searchParams.get('priceMin')
    const priceMax = searchParams.get('priceMax')

    const where: any = {
      sold: false
    }

    if (category && category !== 'All') {
      where.category = category
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ]
    }

    if (location) {
      where.location = { contains: location, mode: 'insensitive' }
    }

    if (priceMin || priceMax) {
      where.price = {}
      if (priceMin) where.price.gte = parseFloat(priceMin)
      if (priceMax) where.price.lte = parseFloat(priceMax)
    }

    const listings = await prisma.listing.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            location: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return successResponse({ listings })
  } catch (error) {
    console.error('Error fetching listings:', error)
    return errorResponse('Failed to fetch listings', 500)
  }
}

export async function POST(request: NextRequest) {
  return withAuth(request, async (req, userId) => {
    try {
      const body = await req.json()
      const { title, description, price, category, condition, images, location } = body

      if (!title || !description || !category || !condition) {
        return errorResponse('Missing required fields')
      }

      const listing = await prisma.listing.create({
        data: {
          title,
          description,
          price: parseFloat(price) || 0,
          category,
          condition,
          images: Array.isArray(images) ? images.join(',') : (images || ''),
          location,
          userId
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

      return successResponse({ listing }, 201)
    } catch (error) {
      console.error('Error creating listing:', error)
      return errorResponse('Failed to create listing', 500)
    }
  })
}

