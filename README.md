# README

# Mandave Hardware - E-Commerce Platform

A full-stack e-commerce website for hardware products built with modern web technologies.

## Features

✅ **Product Catalog**
- Browse and search hardware products
- Product details with images, descriptions, and pricing
- Product categories and filtering

✅ **Shopping Cart**
- Add/remove products
- Quantity management
- Cart persistence

✅ **User Management**
- User registration and authentication
- User profiles
- Order history

✅ **Payment Processing**
- Stripe integration for secure payments
- Order confirmation

✅ **Product Reviews & Q&A**
- Customer reviews and ratings
- Product questions and answers
- Community engagement

✅ **Admin Dashboard** (Coming Soon)
- Product management
- Order management
- Inventory tracking
- Sales analytics

## Tech Stack

- **Frontend**: React 18 with Next.js 14
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: AWS DynamoDB
- **Payments**: Stripe
- **Authentication**: NextAuth.js
- **Storage**: AWS S3
- **Language**: TypeScript

## Prerequisites

Before you begin, you need to have:
- Node.js 18+ installed
- npm or yarn package manager
- AWS Account with DynamoDB access
- Stripe Account for payment processing

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mandave-hardware
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

   Then edit `.env.local` with your actual credentials:
   - `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` - Your Stripe public key
   - `STRIPE_SECRET_KEY` - Your Stripe secret key
   - `AWS_REGION` - AWS region (e.g., us-east-1)
   - `AWS_ACCESS_KEY_ID` - Your AWS access key
   - `AWS_SECRET_ACCESS_KEY` - Your AWS secret key
   - `NEXTAUTH_SECRET` - Generate with: `openssl rand -base64 32`
   - `NEXTAUTH_URL` - Your application URL

4. **Set up AWS DynamoDB**
   
   Create the following DynamoDB tables:
   
   **Products Table**
   - Partition Key: `id` (String)
   - Attributes: name, price, category, image, stock, rating, description
   
   **Users Table**
   - Partition Key: `id` (String)
   - Attributes: email, name, passwordHash, role, addresses
   
   **Orders Table**
   - Partition Key: `id` (String)
   - Attributes: userId, items, totalAmount, status, paymentId, createdAt
   
   **Reviews Table**
   - Partition Key: `id` (String)
   - Attributes: productId, userId, rating, title, comment, createdAt
   
   **Questions Table**
   - Partition Key: `id` (String)
   - Attributes: productId, userId, question, answers, createdAt

## Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── products/      # Product endpoints
│   │   ├── checkout/      # Payment endpoint
│   │   └── webhooks/      # Stripe webhooks
│   ├── auth/              # Authentication pages
│   ├── products/          # Product pages
│   ├── cart/              # Shopping cart page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   └── Footer.tsx         # Footer component
└── lib/                   # Utilities and helpers
    ├── dynamodb.ts        # DynamoDB configuration
    ├── types.ts           # TypeScript types
    └── store.ts           # Zustand store for cart
```

## API Endpoints

### Products
- `GET /api/products` - List all products
- `GET /api/products/[id]` - Get product details

### Checkout
- `POST /api/checkout` - Create Stripe checkout session

### Webhooks
- `POST /api/webhooks/stripe` - Stripe webhook handler

## Next Steps

1. **Connect to AWS DynamoDB** - Replace mock data with actual database calls
2. **Integrate Stripe** - Implement full payment flow
3. **Set up NextAuth.js** - Complete authentication system
4. **Configure AWS S3** - Store product images
5. **Test Payment Flow** - Use Stripe test keys for testing
6. **Deploy to AWS** - Use EC2, ECS, or Amplify
7. **Add Admin Dashboard** - Manage products and orders
8. **Optimize Performance** - CDN, caching, image optimization
9. **Implement Security** - CORS, rate limiting, input validation
10. **Set up Monitoring** - CloudWatch, logs, error tracking

## Stripe Testing

Use these test card numbers for development:

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **Expiry**: Any future date (e.g., 12/25)
- **CVC**: Any 3 digits

## AWS Deployment

### Option 1: AWS Amplify
```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

### Option 2: EC2
1. Create an EC2 instance
2. Install Node.js
3. Clone and build the project
4. Use PM2 for process management

### Option 3: ECS
Create a Docker image and deploy to ECS Fargate.

## Support & Troubleshooting

- Check the console for error messages
- Verify environment variables are set correctly
- Ensure AWS credentials have proper permissions
- Check Stripe test mode settings

## License

This project is private and owned by Mandave Hardware.

## Contact

For issues or questions, contact: info@mandavehardware.com
