# 🎯 Ilayda Süleymanoğlu - CV Portfolio

A modern, professional portfolio website built with Next.js, React, and Tailwind CSS. Features Turkish/English language support, responsive design, and comprehensive sections showcasing career experience, education, skills, and achievements.

## ✨ Features

- **Bilingual Support**: Turkish (TR) and English (EN) with persistent language preference
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: 
  - Navy (#000080) and Vibrant Orange (#FF8C00) color scheme
  - Smooth animations and transitions
  - Interactive components with hover effects
  - Beautiful gradient backgrounds
  
- **Sections Included**:
  - 🏠 Hero Section with personality scores
  - 💼 Interactive Career Timeline
  - 🎓 Education & Academic Background
  - 🎯 Skills with progress bars
  - 🏆 Awards & Certifications
  - 📧 Contact Form
  - 🔗 Social Links

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**:
```bash
cd /home/ilayda/cv_portfolio/cv_portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open in browser**:
Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
cv_portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Header.tsx           # Navigation header with language toggle
│   ├── Hero.tsx             # Hero section with intro
│   ├── Experience.tsx       # Career timeline
│   ├── Education.tsx        # Education section
│   ├── Skills.tsx           # Skills with progress bars
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer
├── locales/
│   ├── en/
│   │   └── common.json      # English content
│   └── tr/
│       └── common.json      # Turkish content
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind CSS config
├── next.config.js           # Next.js config
└── tsconfig.json            # TypeScript config
```

## 🎨 Color Palette

- **Primary**: Navy Blue (#000080)
- **Accent**: Vibrant Orange (#FF8C00)
- **Secondary**: Warm Brown (#8B7355)
- **Dark Brown**: #6B5344

## 🌐 Language Support

The website supports:
- **English** (EN)
- **Turkish** (TR)

Language preference is saved to `localStorage` and persists across sessions.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📖 Content Sections

### Hero Section
Displays name, title, focus areas, personality scores (Conscientiousness: 101, Openness: 100), and personal summary.

### Career Timeline
Interactive timeline showing 7 positions with expandable details:
- Pure Energy (Power Trader)
- NetCoN Systems (Entrepreneur)
- Astrobee Space (Board Member)
- ITU IT Assistant
- McKinsey & Company (Trainee)
- Istanbul Metropolitan Municipality (Fireman Trainee)
- Aspire Institute (Graduate Student)

### Education
Showcases 4 educational programs including meteorology engineering at Istanbul Technical University.

### Skills & Certifications
- Top technical skills (CTRM, Streamlit, Plotly, Python, etc.)
- Awards (Mobility & Climate Datathon Winner)
- Certifications and simulations

### Contact
Multiple contact methods and a functional contact form.

## 🛠️ Technologies Used

- **Framework**: Next.js 16+
- **UI Library**: React 19+
- **Styling**: Tailwind CSS 4+
- **Language**: TypeScript
- **Package Manager**: npm

## 📝 Customization

To modify content:
1. Edit the translation files in `locales/en/common.json` and `locales/tr/common.json`
2. Update component content in `components/` directory
3. Modify colors in `tailwind.config.js`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy with one click

### Build & Host Anywhere

```bash
npm run build
npm start
```

## 📞 Contact

- **Email**: iisuleymanoglu@gmail.com
- **Phone**: +90 506 533 6002
- **LinkedIn**: linkedin.com/in/ilayda-suleymanoglu
- **Company**: www.netcontechnologies.tech

## 📄 License

MIT License - feel free to use this template!

---

**Built with ❤️ using Next.js, React & Tailwind CSS**
