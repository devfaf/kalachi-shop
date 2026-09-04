کالاچی قراره یک فروشگاه اینترنتی با محصولات دیجیتال باشه که با تکنولوژی هایی نظیر ری اکت و نکست و MUI توسعه داده میشه.
این پروژه فعلا در حال توسعه هست

Project: Kalachi shop
Type: Home & Lifestyle E-commerce
Framework: Next.js
Language: TypeScript
UI: MUI

future structure:
kalachi/
├── public/
│   ├── images/
│   ├── icons/
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── (store)/
│   │   │   ├── page.tsx
│   │   │   ├── products/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── categories/
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── cart/
│   │   │   │   └── page.tsx
│   │   │   ├── checkout/
│   │   │   │   └── page.tsx
│   │   │   ├── articles/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   │
│   │   ├── account/
│   │   │   ├── page.tsx
│   │   │   ├── orders/
│   │   │   │   └── page.tsx
│   │   │   ├── addresses/
│   │   │   │   └── page.tsx
│   │   │   └── reviews/
│   │   │       └── page.tsx
│   │   │
│   │   ├── admin/
│   │   │   ├── page.tsx
│   │   │   ├── products/
│   │   │   ├── categories/
│   │   │   ├── orders/
│   │   │   ├── reviews/
│   │   │   └── articles/
│   │   │
│   │   ├── api/
│   │   │   └── ...
│   │   │
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   └── ...
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── product/
│   │   ├── cart/
│   │   ├── review/
│   │   ├── article/
│   │   └── common/
│   │
│   ├── features/
│   │   ├── auth/
│   │   ├── products/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── reviews/
│   │   ├── articles/
│   │   └── admin/
│   │
│   ├── lib/
│   │   ├── api/
│   │   ├── auth/
│   │   ├── db/
│   │   ├── payment/
│   │   └── utils/
│   │
│   ├── types/
│   └── ...
│
├── .env.local
├── .env.example
├── package.json
└── ...