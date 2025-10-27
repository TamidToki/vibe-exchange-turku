# Vibe Exchange - Turku Project Overview

## 🎯 Project Description

Vibe Exchange is a top-tier second-hand marketplace application built specifically for Turku, Finland. Inspired by platforms like rauskalava and bikroy.com, it promotes minimalism, altruism, and actively discourages hoarding behavior through a beautiful, modern interface.

## ✨ Key Features

### 1. **Minimalist Design**
- Clean, uncluttered interface focusing on content
- Thoughtful use of white space
- Subtle gradients and modern typography
- Professional color scheme (primary blue, teal, green accents)

### 2. **Core Functionality**
- **User Authentication**: Secure registration and login with JWT
- **Listings Management**: Create, read, update, delete items
- **Advanced Search**: Filter by category, location, price, keyword
- **Messaging System**: Direct communication between buyers/sellers
- **User Profiles**: Display user information and their listings
- **Responsive Design**: Works seamlessly on mobile, tablet, desktop

### 3. **Turku-Specific Features**
- Neighborhood-based location system (Keskusta, Kupittaa, Iskostama, etc.)
- Localized content in English with Finnish context
- Focus on Finnish sustainability values

### 4. **Promoting Minimalism & Altruism**
- Inspiring content about the benefits of letting go
- Encouragement messaging throughout the platform
- "Free Items" category to promote giving
- Educational content about hoarding impacts
- Community-focused approach

## 🏗️ Technical Stack

### Frontend
- **Next.js 14** with App Router for modern React development
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom theme
- **React Icons** for beautiful icons
- **date-fns** for date formatting
- **React Hook Form** for form handling

### Backend
- **Next.js API Routes** for serverless backend
- **Prisma ORM** for database management
- **SQLite** database (easily upgradeable to PostgreSQL/MySQL)
- **JWT** for authentication
- **bcrypt** for password hashing

### Database Schema
- **Users**: Authentication, profiles, follower counts
- **Listings**: Items for sale with images, categories, conditions
- **Messages**: User-to-user messaging tied to listings

## 📂 Project Structure

```
├── app/
│   ├── api/
│   │   ├── auth/         # Authentication endpoints
│   │   ├── listings/     # Listing CRUD operations
│   │   ├── users/        # User profiles
│   │   └── messages/     # Messaging system
│   ├── auth/             # Login & Register pages
│   ├── listings/         # Browse & Detail pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   └── ListingCard.tsx   # Item card component
├── lib/
│   ├── db.ts             # Prisma client
│   ├── auth.ts           # Auth utilities
│   └── api-helpers.ts    # API utilities
├── prisma/
│   └── schema.prisma     # Database schema
└── public/               # Static assets
```

## 🎨 Design Philosophy

The design is intentionally minimalist to reflect the platform's core values:

1. **Clean & Simple**: Uncluttered interface promotes clarity
2. **Modern & Professional**: Beautiful gradients and animations
3. **Inspiring**: Copy and messaging encourage positive action
4. **Accessible**: Good contrast, readable fonts, clear navigation
5. **Mobile-First**: Responsive design works on all devices

## 🚀 Key Pages

### Homepage (`/`)
- Hero section with clear CTAs
- Values showcase (Minimalism, Altruism, Sustainability)
- Mission statement about hoarding impacts
- Category preview
- Inspiring call-to-action

### Browse Listings (`/listings`)
- Advanced search and filters
- Category selection
- Location and price filters
- Grid/List view toggle
- Responsive card layout

### Create Listing (`/listings/new`)
- Comprehensive form
- Image upload placeholder
- Category and condition selection
- Inspiring minimalism messaging
- Turku neighborhood selection

### Listing Detail (`/listings/[id]`)
- Large image gallery
- Seller information
- Message seller button
- Make offer functionality
- Similar items section

### Authentication (`/auth/login`, `/auth/register`)
- Beautiful gradient backgrounds
- Form validation
- Secure authentication flow
- Clear error handling

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- Input validation
- SQL injection prevention via Prisma

## 🌱 Sustainability Features

- Promotes reuse of items
- Reduces waste in landfills
- Encourages local transactions
- Community building
- Educational content

## 📱 Responsive Breakpoints

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## 🎯 User Flow Examples

### 1. New User Creating Listing
1. Register account at `/auth/register`
2. Navigate to "List an Item"
3. Fill out comprehensive form
4. Select category and condition
5. Upload photos
6. Choose Turku neighborhood
7. Publish listing

### 2. Buyer Browsing Items
1. Visit homepage
2. Browse by category
3. Use search and filters
4. View listing details
5. Message seller
6. Make offer or negotiate

### 3. Communicating
1. Click "Message Seller" on listing
2. Send inquiry
3. Receive response
4. Coordinate pickup/exchange

## 🚀 Getting Started

See `SETUP.md` for detailed installation instructions.

Quick start:
```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

## 📊 Performance Considerations

- Server-side rendering with Next.js
- Optimized images
- Lazy loading for listings
- Efficient database queries
- Minimal bundle size

## 🔮 Future Enhancements

Potential additions:
- Image upload with Cloudinary
- Advanced search with Elasticsearch
- Push notifications
- Email verification
- Payment integration
- Seller ratings
- Advanced analytics
- Mobile app (React Native)

## 📄 License & Credits

Built with 💚 for the Turku community.

Promoting minimalism, altruism, and sustainability in Finland and beyond.

