import Link from 'next/link'
import { FiMapPin, FiClock } from 'react-icons/fi'
import { formatDistance } from 'date-fns'

interface Listing {
  id: string
  title: string
  price: number
  condition: string
  images: string
  location: string
  sold: boolean
  createdAt: Date
}

interface ListingCardProps {
  listing: Listing
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/listings/${listing.id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
        {/* Image */}
        <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
          {listing.images && listing.images.split(',')[0] ? (
            <img
              src={listing.images.split(',')[0]}
              alt={listing.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
          {listing.sold && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              SOLD
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {listing.title}
          </h3>
          
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-primary-600">
              {listing.price === 0 ? 'FREE' : `€${listing.price.toFixed(2)}`}
            </span>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {listing.condition}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <FiMapPin />
              <span>{listing.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiClock />
              <span>{formatDistance(new Date(listing.createdAt), new Date(), { addSuffix: true })}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

