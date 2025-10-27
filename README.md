# Vibe Exchange - Turku

A minimalist second-hand marketplace for Turku, Finland that promotes minimalism, altruism, and discourages hoarding. Built with Next.js, TypeScript, Prisma, and Tailwind CSS.

## ✨ Features

- **Modern & Minimalist Design** - Clean, intuitive interface promoting a clutter-free mindset
- **Comprehensive Listings** - Browse, search, and filter second-hand items
- **User Authentication** - Secure registration and login system
- **Messaging System** - Direct communication between buyers and sellers
- **Location-Based** - Focused on Turku neighborhoods
- **Free Items Section** - Encourage giving away unused items
- **Responsive Design** - Works beautifully on all devices

## 🎯 Mission

Vibe Exchange is designed to help residents of Turku embrace minimalism by:
- Making it easy to sell or give away items they no longer need
- Creating a community that values sustainability and altruism
- Educating users about the benefits of letting go
- Promoting a culture of sharing rather than hoarding

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/vibe-exchange-turku.git
cd vibe-exchange-turku
```

2. Install dependencies
```bash
npm install
```

3. Set up the environment variables
```bash
cp .env.example .env
```

4. Set up the database
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Prisma** - Modern ORM for database
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library
- **date-fns** - Date formatting utilities

## 📁 Project Structure

```
├── app/
│   ├── auth/          # Authentication pages
│   ├── listings/      # Listings pages
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/         # Reusable components
├── prisma/            # Database schema
├── public/            # Static assets
└── lib/               # Utilities and helpers
```

## 🎨 Design Philosophy

The design is intentionally minimalist:
- Clean white spaces
- Subtle gradients
- Thoughtful typography
- Focus on content
- Clear calls-to-action
- Inspiring messaging

## 📱 Key Pages

- **Home** - Showcases values and featured listings
- **Browse** - Search and filter all listings
- **List Item** - Create new listings
- **Listing Detail** - View full item details
- **Login/Register** - User authentication
- **Profile** - User dashboard

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 💚 Values

Built with minimalism, altruism, and sustainability in mind. Every design decision promotes letting go of what you don't need and helping others find what they do.

---

Made with 💚 for Turku, Finland

