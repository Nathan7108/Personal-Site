# Nathan Luckock - Backend Developer Portfolio

A modern, responsive portfolio website showcasing Nathan's backend development skills, projects, and professional experience.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with React and Vite for optimal loading speeds
- **Interactive Elements**: Smooth scrolling, hover effects, and dynamic content
- **Contact Integration**: Working contact form with Formspree integration

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Project Structure

```
src/
├── components/
│   ├── portfolio/          # Portfolio-specific components
│   │   ├── About.tsx      # Skills and expertise section
│   │   ├── Contact.tsx    # Contact form and information
│   │   ├── Employer.tsx   # Work experience section
│   │   ├── Hero.tsx       # Landing section
│   │   ├── Navigation.tsx # Header navigation
│   │   ├── Portfolio.tsx  # Main portfolio wrapper
│   │   └── Projects.tsx   # Projects showcase
│   └── ui/                # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── pages/                 # Page components
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pixel-prism-persona-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Customization

### Personal Information
Update the following files with your information:
- `src/components/portfolio/Hero.tsx` - Name, title, social links
- `src/components/portfolio/About.tsx` - Skills and expertise
- `src/components/portfolio/Projects.tsx` - Project details and images
- `src/components/portfolio/Contact.tsx` - Contact information
- `src/components/portfolio/Employer.tsx` - Work experience

### Styling
The project uses Tailwind CSS with custom CSS variables defined in `src/index.css`. The color scheme and styling can be customized by modifying the CSS variables.

### Images
Replace images in the `public/media/` directory with your own:
- `myself.png` - Profile photo
- Project images (odbc.png, inmation.png, etc.)
- `Nathan_Luckock_Resume.pdf` - Resume file

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` branch
- **AWS S3**: Upload the `dist` folder

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or collaboration opportunities, reach out to Nathan at nathan.luckock@gmail.com.
