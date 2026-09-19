کالاچی یه پروژه فروشگاهی هست که با تکنولوژی های نظیر Next و postgre داره ساخته میشه و فروشگاه محصولات دیجیتال هست.
تصمیم دارم برای UI از shadcn استفاده کنم به جای متریال و این تصمیم رو به دلیل داینامیک تر بودن shadcn و ترکیب با تیلویند گرفتم. به علاوه خیلی از پروژه ها ازش در حال حاضر استفاده میکنن.

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