'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX, FiHome, FiSearch, FiHeart, FiUser } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-teal-600 rounded-lg flex items-center justify-center">
              <FiHeart className="text-white text-xl" />
            </div>
            <span className="text-xl font-bold text-gray-900">Vibe Exchange</span>
            <span className="text-sm text-gray-500">Turku</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/listings"
              className="text-gray-700 hover:text-primary-600 transition-colors flex items-center space-x-1"
            >
              <FiHome />
              <span>Browse</span>
            </Link>
            <Link
              href="/listings/new"
              className="text-gray-700 hover:text-primary-600 transition-colors flex items-center space-x-1"
            >
              <FiSearch />
              <span>List Item</span>
            </Link>
            <Link
              href="/auth/login"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/listings"
              className="block text-gray-700 hover:text-primary-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              Browse Listings
            </Link>
            <Link
              href="/listings/new"
              className="block text-gray-700 hover:text-primary-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              List an Item
            </Link>
            <Link
              href="/auth/login"
              className="block text-primary-600 font-semibold py-2"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="block bg-primary-600 text-white px-4 py-2 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

