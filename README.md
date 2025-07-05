# Medence Legal - Personal Lawyer Booking Platform

A modern, responsive web application for personal lawyer booking services built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Interactive Components**: Smooth scrolling navigation, animated sections, and micro-interactions
- **Client Testimonials**: Scrollable review carousel with navigation controls
- **FAQ Section**: Expandable questions with smooth animations
- **Comparison Table**: Clear comparison between Medence Legal and competitors
- **Loading Animation**: Professional loading screen on app startup
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Shadcn/ui
- **Animations**: Custom CSS animations with Tailwind

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

## 🎨 Color Palette

- **Primary Green**: #0ADB5C
- **Neutral Gray**: #6B7280
- **Accent Yellow**: #FEF9C3
- **Dark Background**: #171717

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/medence-legal.git
   cd medence-legal
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
medence-legal/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # Shadcn/ui components
│   ├── About.tsx            # About section component
│   ├── FAQ.tsx              # FAQ section component
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section component
│   ├── LoadingScreen.tsx    # Loading animation component
│   ├── MedenceLegal.tsx     # Comparison table component
│   ├── Navbar.tsx           # Navigation component
│   ├── UserReviews.tsx      # Client testimonials component
│   └── WhyChooseUs.tsx      # Features section component
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🎯 Key Components

### Navigation

- Fixed navbar with smooth scrolling
- Mobile-responsive hamburger menu
- Call-to-action button

### Hero Section

- Compelling headline and subtext
- Professional family imagery
- Action buttons with hover effects

### About Section

- Service overview with visual elements
- Justice-themed imagery
- Animated content reveal

### Why Choose Us

- Three feature cards with distinct colors
- Icon-based visual hierarchy
- Detailed benefit lists

### Comparison Table

- Side-by-side feature comparison
- Visual distinction between services
- Mobile-optimized layout

### Client Reviews

- Scrollable testimonial carousel
- Star ratings and client information
- Navigation controls

### FAQ Section

- Expandable question format
- Smooth accordion animations
- Comprehensive service information

## 🎨 Animations

The application includes several custom animations:

- **slideDown**: Top-to-bottom reveal
- **slideInLeft/Right**: Horizontal slide animations
- **slideInUp**: Bottom-to-top reveal
- **fadeInUp**: Fade with upward motion
- **pulse-slow**: Gentle pulsing effect

## 📱 Mobile Optimization

- Touch-friendly navigation
- Optimized image sizes
- Readable typography on small screens
- Simplified layouts for mobile devices
- Fast loading times

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure custom domain if needed

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Customization

- **Colors**: Update the color palette in `tailwind.config.ts`
- **Fonts**: Modify font settings in `app/layout.tsx`
- **Content**: Update text content in respective component files
- **Images**: Replace stock images with your own in the components

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- **Email**: info@medenceLegal.com
- **Phone**: +91 9876543210
- **Website**: [medenceLegal.com](https://medenceLegal.com)

## 🙏 Acknowledgments

- Design inspiration from modern legal service platforms
- Icons provided by Lucide React
- Images from Pexels
- Built with Next.js and Tailwind CSS

---

**Made with @arjunchavhan024 ❤️ by the Medence Legal Team**
