# 🎧 Audiophile E-Commerce

A premium e-commerce platform for high-end audio equipment, built with modern web technologies and featuring smooth animations, real-time data, and a seamless shopping experience.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwindcss)

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog** - Browse headphones, speakers, and earphones with detailed product pages
- **Smart Cart** - Persistent shopping cart with quantity management
- **Category Filtering** - Organized product categories for easy navigation
- **Product Recommendations** - "You may also like" suggestions on product pages

### 🎨 Design & UX
- **Smooth Animations** - Framer Motion powered animations throughout the app
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Loading States** - Professional skeleton loaders for better UX
- **Error Handling** - Beautiful error pages with helpful actions
- **Empty States** - Thoughtful empty state designs

### 🚀 Modern Stack
- **Next.js 16** - Latest App Router with React Server Components
- **Convex** - Real-time backend database and API
- **TypeScript** - Full type safety across the codebase
- **Tailwind CSS 4** - Utility-first styling with custom animations
- **React Hook Form + Zod** - Form validation and management
- **Email Integration** - Order confirmation emails via Nodemailer

### 💳 Checkout & Orders
- **Multi-step Checkout** - Billing, shipping, and payment information
- **Payment Methods** - Cash on delivery and e-Money options
- **Order Confirmation** - Beautiful order confirmation emails
- **Form Validation** - Real-time validation with helpful error messages

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Database:** Convex
- **Forms:** React Hook Form + Zod
- **UI Components:** Radix UI
- **Email:** React Email + Nodemailer

## 📦 Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm (recommended) or npm
- A Convex account ([convex.dev](https://convex.dev))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Obiski15/audiophile.git
   cd audiophile
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file:
   ```env
   # Convex
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   
   # Product IDs (from your Convex database)
   NEXT_PUBLIC_XX99_Mark_II=your_product_id
   NEXT_PUBLIC_ZX9_SPEAKER=your_product_id
   NEXT_PUBLIC_ZX7_SPEAKER=your_product_id
   NEXT_PUBLIC_YX1_EARPHONE=your_product_id
   ```

4. **Set up Convex**
   ```bash
   npx convex dev
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
audiophile/
├── app/                      # Next.js App Router pages
│   ├── category/            # Category pages
│   ├── checkout/            # Checkout flow
│   ├── products/            # Product detail pages
│   ├── error.tsx            # Global error boundary
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/              # React components
│   ├── cart/               # Cart-related components
│   ├── categories/         # Category components
│   ├── checkout/           # Checkout components
│   ├── header/             # Header components
│   ├── landing/            # Homepage components
│   ├── products/           # Product components
│   └── ui/                 # Reusable UI components
├── convex/                 # Convex backend
│   ├── actions.ts          # Server actions
│   ├── orders.ts           # Order mutations
│   ├── products.ts         # Product queries
│   └── schema.ts           # Database schema
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── providers/              # React context providers
├── schema/                 # Zod validation schemas
├── templates/              # Email templates
└── public/                 # Static assets
```

## 🎨 Key Features Implementation


### State Management
- Local storage for persistent cart state
- React Context for global cart management
- Convex real-time queries for product data
- Custom hooks for media queries and cart operations

### Form Handling
- Type-safe forms with React Hook Form
- Schema validation with Zod
- Real-time error feedback
- Conditional form fields based on payment method

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Build for Production

```bash
pnpm build
pnpm start
```

## 📝 Available Scripts

```bash
pnpm dev           # Start development server
pnpm build         # Build for production
pnpm start         # Start production server
pnpm lint          # Run ESLint
pnpm format        # Format code with Prettier
pnpm check-types   # Type check without emitting
pnpm shad          # Add shadcn/ui components
```
