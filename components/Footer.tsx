'use client'

import Link from 'next/link'
import { FiHeart, FiGithub, FiMail, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-teal-600 rounded-lg flex items-center justify-center">
                <FiHeart className="text-white" />
              </div>
              <span className="text-white font-bold">Vibe Exchange</span>
            </div>
            <p className="text-sm">
              Empowering Turku residents to embrace minimalism, practice altruism, 
              and reduce waste through a beautiful second-hand marketplace.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/listings" className="hover:text-primary-400 transition-colors">
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link href="/listings/new" className="hover:text-primary-400 transition-colors">
                  List an Item
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="hover:text-primary-400 transition-colors">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/listings?category=electronics" className="hover:text-primary-400 transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/listings?category=furniture" className="hover:text-primary-400 transition-colors">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="/listings?category=clothing" className="hover:text-primary-400 transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/listings?category=free" className="hover:text-primary-400 transition-colors">
                  Free Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <FiMapPin className="text-primary-400" />
                <span>Turku, Finland</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail className="text-primary-400" />
                <Link href="mailto:hello@vibeexchange.fi" className="hover:text-primary-400 transition-colors">
                  hello@vibeexchange.fi
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FiGithub className="text-primary-400" />
                <Link href="https://github.com" className="hover:text-primary-400 transition-colors">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Vibe Exchange - Turku. 
            Built with minimalism and care. 💚
          </p>
        </div>
      </div>
    </footer>
  )
}

