# Mitra Safety - Indonesian Safety Equipment E-commerce Platform

## Overview
Mitra Safety is a comprehensive e-commerce platform for safety equipment in Indonesia, offering both retail (B2C) and corporate (B2B) solutions.

## Recent Changes (October 22, 2025)

### UI/UX Improvements
- ✅ **PromoBar Component**: Added a sticky promotional banner at the top showing:
  - Free shipping for Jabodetabek area
  - Special 11.11 promotion with up to 50% discount for bulk orders
- ✅ **Hero Layout Optimization**: Cleaned up the hero section by moving promotions to dedicated PromoBar
- ✅ **Better Visual Hierarchy**: Promotional messages are now prominently displayed at the top of the page

### Technical Improvements
- ✅ Configured Vite for Replit proxy support (0.0.0.0:5000 with HMR over WSS)
- ✅ Fixed TypeScript type compatibility issues between database schema and components
- ✅ Updated .gitignore with proper exclusions

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
