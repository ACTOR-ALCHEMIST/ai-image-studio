[中文说明 | Chinese README](./README.zh-CN.md)

# AI Image Studio

AI Image Studio is an AI-powered image generation and management platform built with Next.js 13+, Supabase Auth, and Stripe payments. It supports email/Google login and registration, is secure and efficient, and suitable for individuals and teams.

## Features

- AI image generation and management
- Email/Google login and registration (Supabase Auth)
- Stripe payment integration
- User permissions and session management
- Responsive UI based on shadcn/ui
- Multi-device support

## Tech Stack

- **Frontend Framework**: Next.js 13+ (App Router)
- **Authentication & User Management**: Supabase Auth
- **Payment System**: Stripe
- **UI Library**: shadcn/ui
- **Database**: Postgres (via Supabase)
- **API Routes**: Next.js API Routes

## Getting Started

1. Clone the repository
   ```bash
   git clone git@github.com:ACTOR-ALCHEMIST/ai-image-studio.git
   cd ai-image-studio
   ```

2. Install dependencies
   ```bash
   pnpm install
   # or npm install / yarn install
   ```

3. Configure environment variables  
   Copy `.env.example` to `.env` and fill in your Supabase/Stripe project configuration.

4. Run the development server
   ```bash
   pnpm dev
   # or npm run dev / yarn dev
   ```
   Visit [http://localhost:3000](http://localhost:3000)

## Main Pages

- `/` Home: Project introduction, login/register buttons for unauthenticated users
- `/login` Login: Supports email and Google login
- `/register` Register: Supports email and Google registration
- `/api/stripe/checkout`, `/api/stripe/webhook`: Stripe payment APIs
- `/auth/callback`: Third-party login callback

## Directory Structure

```
app/
  page.tsx           # Home page
  layout.tsx         # Global layout
  login/page.tsx     # Login page
  register/page.tsx  # Register page
  api/stripe/        # Stripe payment APIs
  auth/callback/     # Third-party login callback
components/
  nav.tsx            # Navigation bar
  ui/                # Basic UI components
lib/
  auth-context.tsx   # Auth context
  supabase.ts        # Supabase client
  payments/          # Payment logic
```

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase service role key (server only)
- `STRIPE_SECRET_KEY`: Stripe backend secret key
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook secret
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe frontend public key
- `NEXT_PUBLIC_BASE_URL`: Base site URL
- `AUTH_SECRET`: Auth encryption secret

**Note: Do not commit .env, .env.local, or other environment files to the repository.**

## Production Deployment

- Recommended to deploy on [Vercel](https://vercel.com/) or other Next.js-compatible platforms
- Configure production environment variables
- Set Stripe webhook to production API path in Stripe dashboard

## Contributing & License

Contributions via issues and PRs are welcome.  
This project is open-sourced under the MIT License.

---
For detailed development docs or questions, please open an issue on GitHub.
