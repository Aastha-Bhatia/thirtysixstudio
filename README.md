# thirtysixstudios

A polished React landing experience for a boutique digital production studio. This project combines smooth scrolling, animated canvas visuals, and an immersive brand presentation using React, GSAP, Tailwind CSS, and Locomotive Scroll.

## Preview 

https://github.com/user-attachments/assets/60581552-6661-44e9-82d4-656b64554aeb

## Features

- Responsive React + Vite app
- Smooth scrolling powered by `locomotive-scroll`
- Animated theme transitions with `gsap`
- Canvas-based visual effects
- Tailwind CSS styling
- Interactive brand landing sections
- Custom scroll-aware canvas elements

## Tech Stack

- React 19
- Vite
- GSAP
- Locomotive Scroll
- Tailwind CSS 4
- ESLint

## Installation

```bash
npm install
```

## Development
```bash
npm run dev
```
## Build
```bash
npm run build
```
## Preview Production Build
```bash
npm run preview
```
## Project Structure
App.jsx — Main app layout, theme toggle, scroll setup, and interactive hero section
Canvas.jsx — Canvas rendering component with GSAP-driven frame animation
canvasimages.js — Image source list for canvas animation
data.js — Canvas positioning and animation metadata
index.css — Global styles and Tailwind base styling
vite.config.js — Vite configuration
package.json — Dependencies and scripts

## Notes
The theme toggle switches between light and dark styling while updating the body background with GSAP.
Clicking the main hero heading triggers a canvas reveal animation and a bold accent transition.
The app uses locomotive-scroll for a fluid, physics-based scroll feel across sections.

## Author
Built by Aastha Bhatia
Special thanks to sherianscodingschool for the tutorials.
