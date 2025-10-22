# Mitra Safety - Indonesian Safety Equipment E-commerce Platform

## Overview
Mitra Safety is a comprehensive e-commerce platform for safety equipment in Indonesia, offering both retail (B2C) and corporate (B2B) solutions.

## Recent Changes (October 22, 2025)

### UI/UX Improvements Completed
- ✅ **Category Cards Enhancement**: Each category now displays exactly 3 unique product images with Indonesian captions
  - Created categoryImages.ts mapping file with 20 total product images (3 per category × 6 categories)
  - Enhanced CategoryCard component with professional 3-image gallery layout
  - All images copied to client/public/assets/generated_images/ for proper serving
  
- ✅ **WhatsApp Communication Widget**: Major enhancement with improved visibility and professional styling
  - Floating widget with green gradient background and pulsing animation
  - "Chat Langsung" label for clear call-to-action
  - Interactive chat panel with quick message templates
  - Professional styling aligned with WhatsApp brand
  
- ✅ **WhatsApp Quick Contact Buttons**: Added strategic placement throughout the site
  - Hero section: "Chat Langsung via WhatsApp" prominent button
  - Floating widget: Always accessible from any page
  - Pre-filled messages for better user experience
  
- ✅ **Layout & Visual Hierarchy Optimization**: 
  - Enhanced spacing and alignment across all sections
  - Improved heading sizes (3xl → 4xl on desktop) for better visual hierarchy
  - Enhanced underline accent from 1px → 1.5px with gradient
  - Better responsive padding for mobile and desktop views
  - Consistent section spacing (py-8) throughout the site
  
- ✅ **PromoBar Component**: Sticky promotional banner at the top showing:
  - Free shipping for Jabodetabek area
  - Special 11.11 promotion with up to 50% discount for bulk orders

### Technical Improvements
- ✅ Fixed React hooks ordering issue in ProductDetailModal (critical bug fix)
- ✅ Fixed TypeScript type compatibility for product specifications
- ✅ Configured Vite for Replit proxy support (0.0.0.0:5000 with HMR over WSS)
- ✅ Updated .gitignore with proper exclusions
- ✅ All changes maintain full responsiveness for web and mobile (Android/iOS)

## Project Architecture

### Frontend Stack
- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3 with custom animations
- **UI Components**: Radix UI primitives with custom design system
- **State Management**: Zustand for cart and product filtering
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React

### Backend Stack
- **Runtime**: Node.js with Express
- **Database**: MySQL 8 with Drizzle ORM
- **Session Management**: express-session
- **API**: RESTful endpoints

### Key Features
1. **Dual Shopping Experience**:
   - Retail mode for individual customers
   - Corporate mode for B2B procurement with bulk pricing

2. **Product Categories**:
   - Helm Safety (Safety Helmets)
   - Sarung Tangan (Gloves)
   - Rompi (Safety Vests)
   - Sepatu Safety (Safety Boots)
   - Kacamata (Safety Goggles)
   - Masker (Respirators)

3. **Advanced Filtering**:
   - Category-based filtering
   - Price range selection
   - Stock availability
   - Protection levels
   - Compliance standards (SNI, ISO, ANSI)
   - Hazard class filtering
   - Industry-specific filtering

4. **E-commerce Features**:
   - Shopping cart with persistent state
   - Real-time inventory tracking
   - Product detail modals
   - Checkout flow
   - Order management

## User Preferences
- **Language**: Indonesian (Bahasa Indonesia)
- **Focus**: Safety equipment for Indonesian market
- **Design**: Modern, accessible, mobile-responsive

## Development
- Port: 5000 (both frontend and backend)
- Database: MySQL on localhost:3306
- Hot Module Replacement (HMR): Enabled via Vite

## Deployment
- The app is configured to run on Replit with proper proxy support
- Deployment target: Autoscale (for stateless web apps)

## Notes
- The project includes generated safety equipment images in `attached_assets/generated_images/`
- All content is localized for Indonesian market
- Accessibility (a11y) is a priority with proper ARIA labels and semantic HTML
