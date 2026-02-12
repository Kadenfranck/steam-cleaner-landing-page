# Steam Cleaner Service Landing Page

A modern, responsive landing page for a professional steam cleaning service serving the Greater Orlando and Kissimmee area. Built with React, TypeScript, and featuring AI-powered hero image generation using Google's Gemini API.

## Features

- **AI-Generated Hero Images**: Dynamic room imagery using Google's Gemini 2.5 Flash Image model
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
- **AI Integration**: Google Generative AI (@google/genai)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- A Google Gemini API key ([Get one here](https://ai.google.dev/))

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

3. Set up environment variables:
   - Copy or rename `.env.local` if needed
   - Add your Gemini API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Project Structure

```
steam-cleaner-service-landing-page/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section with AI image
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

1. Update contact information in `components/Footer.tsx` and `components/Navbar.tsx`
2. Modify pricing in `components/Pricing.tsx`
3. Change testimonials in `components/Testimonials.tsx`
4. Update the hero image prompt in `App.tsx` to match your business
5. Customize colors by modifying the Tailwind classes (current primary color: #FFB800)

## License

MIT License - feel free to use this for your own projects!
