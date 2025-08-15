# Jayanth Gowda Portfolio

A modern, responsive portfolio website showcasing my experience as a Full Stack Developer and AI Engineer.

## Features

- **Animated Hero Section** - Eye-catching introduction with gradient animations and typing effect
- **Interactive Timeline** - Professional experience displayed in an engaging timeline format
- **Skills Visualization** - Categorized skills with progress bars and animations
- **Project Showcase** - Featured projects with modal views for detailed information
- **Contact Form** - Easy-to-use contact section with social links
- **Fully Responsive** - Optimized for all devices and screen sizes
- **Smooth Animations** - Powered by Framer Motion for fluid user experience

## Technologies Used

- React with TypeScript
- Framer Motion for animations
- Lucide React for icons
- React Typed for typing animations
- CSS3 with custom properties
- Responsive Grid and Flexbox layouts

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jayanthgowda/jayanth-portfolio.git
cd jayanth-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build folder will contain the optimized files ready for deployment.

## Deployment Options

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/jayanth-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to [Netlify](https://www.netlify.com/)

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## Customization

- Update personal information in component files
- Modify color scheme in `App.css` CSS variables
- Add/remove sections as needed
- Update project data in `Projects.tsx`
- Customize animations in component files

## Performance Optimizations

- Lazy loading for images
- Code splitting for better initial load time
- Optimized animations for smooth performance
- Minified production build

## Contact

Jayanth Gowda Ramanna
- Email: jayanthgowda.ramanna@wmich.edu
- LinkedIn: [jayanth-gowda-ramanna](https://linkedin.com/in/jayanth-gowda-ramanna)
- Phone: (269) 873-7297

## License

This project is open source and available under the MIT License.
