# 🚀 Quick Start Guide

Get Vibe Exchange running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Database

```bash
npx prisma generate
npx prisma db push
```

## Step 3: Start Development Server

```bash
npm run dev
```

## Step 4: Open Your Browser

Visit: **http://localhost:3000**

## 🎉 That's It!

You're now running a fully functional marketplace application!

## 📚 What You Get

✅ Beautiful, minimalist homepage  
✅ User authentication (register/login)  
✅ Browse and search listings  
✅ Create new listings  
✅ View detailed listings  
✅ Messaging system  
✅ User profiles  
✅ Complete API backend  
✅ SQLite database  

## 🔍 Explore the App

1. **Homepage** (`/`) - See the beautiful landing page
2. **Browse** (`/listings`) - Explore all listings
3. **Create** (`/listings/new`) - Add a new item
4. **Register** (`/auth/register`) - Create an account
5. **Login** (`/auth/login`) - Sign in

## 🛠️ Database Management

View your database visually:

```bash
npx prisma studio
```

Opens at: http://localhost:5555

## 📁 Key Files

- `README.md` - Full documentation
- `SETUP.md` - Detailed setup instructions
- `PROJECT_OVERVIEW.md` - Complete project overview
- `prisma/schema.prisma` - Database schema

## 💡 Tips

- Check `.env` for environment variables
- Use Prisma Studio to manage data
- All API routes are in `app/api/`
- Components are in `components/`
- Styles use Tailwind CSS

## 🎯 Next Steps

1. Customize the styling in `tailwind.config.ts`
2. Add real images (replace placeholder URLs)
3. Set up Cloudinary for image uploads
4. Configure JWT_SECRET in production
5. Deploy to Vercel or your preferred hosting

## 📞 Need Help?

All documentation is in the root directory!

---

Built with 💚 for Turku, Finland

