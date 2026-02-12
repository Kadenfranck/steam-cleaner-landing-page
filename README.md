# Steam Cleaner Service Landing Page

A modern, responsive landing page for a professional steam cleaning service serving the Greater Orlando and Kissimmee area. Built with React, TypeScript, and Vite.

## Features

- **Professional Hero Image**: High-quality hero section showcasing clean, modern living spaces
- **Responsive Design**: Mobile-first layout with Tailwind CSS
- **Transparent Pricing**: Clear pricing for carpet, upholstery, and tile cleaning services
- **Customer Testimonials**: Social proof section with client reviews
- **Professional Branding**: Consistent design with custom logo and color scheme
- **Easy Contact**: Multiple call-to-action buttons for immediate customer engagement

## Technology Stack

- **Framework**: React 19.2.4 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: lucide-react

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd steam-cleaner-service-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Project Structure

```
steam-cleaner-service-landing-page/
├── public/
│   └── images/         # Static assets
│       └── hero-clean-carpet.png # Hero image
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Pricing.tsx     # Pricing cards
│   ├── ValueAdd.tsx    # Value propositions
│   ├── Testimonials.tsx # Customer reviews
│   ├── HowItWorks.tsx  # Process steps
│   ├── CallToAction.tsx # CTA section
│   ├── Footer.tsx      # Footer
│   └── Logo.tsx        # Custom logo component
├── App.tsx             # Main app component
├── index.tsx           # React entry point
├── index.html          # HTML template
└── vite.config.ts      # Vite configuration
```

## Customization

To adapt this landing page for your own business:

1. Replace the hero image in `public/images/hero-clean-carpet.png` with your own
2. Update contact information in `components/Footer.tsx` and `components/Navbar.tsx`
3. Modify pricing in `components/Pricing.tsx`
4. Change testimonials in `components/Testimonials.tsx`
5. Customize colors by modifying the Tailwind classes (current primary color: #FFB800)

## License

MIT License - feel free to use this for your own projects!
