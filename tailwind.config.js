/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        'brand-navy': '#1A2B3C',
        'brand-charcoal': '#333333',
        
        // Neutral Colors
        'brand-white': '#FFFFFF',
        'brand-off-white': '#F8F8F8',
        'brand-light-grey': '#CCCCCC',
        
        // Accent Colors
        'brand-teal': '#008080',
        'brand-teal-light': '#00A080',
        'brand-gold': '#B8860B',
        'brand-bronze': '#CD7F32',
        
        // Text Colors
        'text-body': '#333333',
        'text-light': '#666666',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'display': '72px',
        'h1-desktop': '56px',
        'h1-mobile': '36px',
        'h2-desktop': '42px',
        'h2-mobile': '28px',
        'h3-desktop': '32px',
        'h3-mobile': '24px',
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #1A2B3C 0%, #008080 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1A2B3C 0%, #333333 100%)',
        'gradient-cta': 'linear-gradient(135deg, #1A2B3C 0%, #008080 50%, #1A2B3C 100%)',
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(0, 128, 128, 0.15)',
        'luxury-lg': '0 20px 60px rgba(0, 128, 128, 0.2)',
        'gold': '0 8px 32px rgba(184, 134, 11, 0.2)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        vibecoffee: {
          "primary": "#008080",
          "secondary": "#B8860B",
          "accent": "#00A080",
          "neutral": "#333333",
          "base-100": "#FFFFFF",
          "info": "#1A2B3C",
          "success": "#00A080",
          "warning": "#B8860B",
          "error": "#CD7F32",
        },
      },
    ],
  },
};