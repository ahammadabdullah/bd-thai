# BD Thai Food & Beverage Ltd. Website

A multilingual, full-featured web application for BD Thai Food & Beverage Ltd., built with Next.js, Prisma, and Tailwind CSS. The site supports English, Arabic, and French, and includes a secure admin dashboard for managing blogs, users, and quotations.

## Technologies Used

- **Next.js (App Router)**: Modern React framework for server-side rendering, routing, and API routes.
- **React**: UI library for building interactive interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Prisma**: ORM for MongoDB, used for database access and modeling.
- **NextAuth**: Authentication solution for secure login and user management.
- **next-intl**: Internationalization (i18n) for multilingual support.
- **React Query**: Data fetching and caching for client-side interactivity.
- **UploadThing**: File upload handling for blog images.
- **Lucide React**: Icon library for modern UI icons.

## Project Structure

```
├── prisma/
│   └── schema.prisma         # Database models for Blog, User, Quotation
├── public/                   # Static assets and images
├── src/
│   ├── actions/
│   │   ├──index              # Server actions for Auth operations
│   │   ├──blogs              # Server actions for Blog operations
│   │   ├──inquiry            # Server actions for Quotation operations
│   │   ├──users              # Server actions for User operations
│   ├── app/                  # Next.js app directory (routing, pages, layouts)
│   │   ├── (admin)/          # Admin dashboard routes (hidden group route)
│   │   │   └── dashboard/
│   │   │       ├── blogs/    # Blog management
│   │   │       ├── quotations/ # Quotation management
│   │   │       └── users/    # User management
│   │   ├── (public)/         # Public-facing routes (hidden group route)
│   │   │   ├── beverages/    # Beverages info
│   │   │   ├── contract/     # Contract manufacturing info
│   │   │   ├── food/         # Food products info
│   │   │   ├── manufacturing/# Manufacturing & compliance info
│   │   │   ├── news/         # News & blogs
│   ├── assets/               # Images and static files
│   ├── auth/                 # Authentication config and logic
│   ├── components/           # Reusable UI components and modals
│   ├── hooks/                # Custom React hooks
│   ├── i18n/                 # Internationalization setup
│   ├── lib/                  # Utility functions and Prisma client
│   ├── messages/             # Translation files (en, ar, fr)
│   └── providers/            # React context providers
├── .env                      # Environment variables (DB, Auth, etc.)
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## Features

### Multilingual Website

- Supports English, Arabic, and French.
- All content, navigation, and forms are translated using `next-intl`.
- Language switcher available in the navbar.

### Admin Dashboard

Accessible to authorized users via secure login.

#### Blog Management

- Add, edit, and delete blog posts.
- Upload images for blogs.
- Blogs are displayed in a sortable, paginated table.

#### User Management

- Add new users.
- Update user details and passwords.
- Delete users.

#### Quotation Management

- View all submitted quotations.
- Update quotation status (Pending, Approved, Rejected).

### Inquiry & Quotation Forms

- Visitors can submit product inquiries and quotation requests.
- Admins can view and manage submissions from the dashboard.

### Technologies & Integrations

- **Authentication**: NextAuth with credentials provider and role-based access.
- **Database**: MongoDB via Prisma ORM.
- **File Uploads**: UploadThing for blog images.
- **UI**: Tailwind CSS, Lucide icons, Radix UI dialogs and forms.
- **Data Fetching**: React Query for client-side updates and caching.

## How to Run

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**

   - Copy `.env.example` to `.env` and fill in your MongoDB connection string, authentication secrets, and admin credentials.

3. **Generate Prisma client:**

   ```bash
   npx prisma generate
   ```

4. **Push database schema:**

   ```bash
   npx prisma db push
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

6. **Access the site:**
   - Visit [http://localhost:3000](http://localhost:3000) for the public site.
   - Visit `/dashboard` for the admin dashboard (after logging in).
   - Public routes are organized under the `/public` group for better code structure, but URLs remain clean for users.

## Notes

- All admin features require authentication.
- The site is fully responsive and optimized for modern browsers.

---
