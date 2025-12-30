# Cedar Edge Website

A modern, responsive website for Cedar Edge - providing Training, Consulting, and Solutions services. Built with Next.js 16 and React 19, featuring a beautiful UI with smooth animations and a seamless user experience.

## About

Cedar Edge is a technology education and consulting company focused on providing comprehensive training programs, strategic consulting, and custom software solutions. This website serves as the digital presence for showcasing services, courses, and connecting with clients and students.

## Features

- 🎨 **Modern UI/UX** - Clean, responsive design built with Tailwind CSS
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🚀 **Fast Performance** - Built with Next.js 16 for optimal performance
- 🎯 **Service Pages** - Dedicated pages for Training, Consulting, and Solutions
- 📚 **Course Catalog** - Showcase of available training programs
- 👥 **About Section** - Company information and instructor profiles
- 📧 **Contact Form** - Easy way for clients to get in touch
- 🎭 **Interactive Navigation** - Dropdown menu for services with smooth transitions

## Tech Stack

- **Framework:** [Next.js 16.1.1](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **UI Library:** React 19.2.3
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Notifications:** Sonner
- **Font:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone git@github.com:cedaredge/cedar-edge-website.git
cd cedar-edge-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
cedar-edge-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   │   ├── consulting/    # Consulting services
│   │   ├── training/      # Training programs
│   │   └── solutions/     # Custom solutions
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── src/
│   ├── components/        # React components
│   │   ├── navigation/    # Navigation components (Navbar)
│   │   ├── sections/      # Page sections (Hero, CourseCatalog, etc.)
│   │   └── ui/            # Reusable UI components
│   └── lib/               # Utility functions
├── public/                # Static assets (images, icons)
└── package.json           # Dependencies and scripts
```

## Available Routes

- `/` - Home page with hero section, course catalog, testimonials, and learning paths
- `/about` - Company information, founder story, instructors, and mission
- `/services` - Overview of all services
- `/services/training` - Detailed training programs and courses
- `/services/consulting` - Consulting services and offerings
- `/services/solutions` - Custom software solutions
- `/contact` - Contact form and company contact information

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Development

The project uses:
- **TypeScript** for type safety
- **ESLint** for code quality
- **Tailwind CSS** for styling with custom theme configuration
- **App Router** for file-based routing

### Key Components

- `Navbar` - Responsive navigation with services dropdown
- `HeroSection` - Landing page hero section
- `CourseCatalog` - Display of available courses
- `Testimonials` - Student testimonials section
- `LearningPaths` - Structured learning journey information

## Deployment

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure build settings
4. Deploy!

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

© 2025 Cedar Edge. All rights reserved.

## Contact

- **Email:** info@cedaredge.in
- **Phone:** +91 7702017597
- **Address:** 123 Tech Park, Sheelanagar, Natayyapalem 5, Visakhapatnam, Andhra Pradesh 530012, India

---

Built with ❤️ by Cedar Edge
