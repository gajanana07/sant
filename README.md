# Santosh B - Portfolio Website

A modern, responsive developer portfolio showcasing projects, experience, and achievements.

![Portfolio Preview](frontend/public/profile.jpeg)

## 🚀 Features

- **Modern Dark Theme** with cyan/blue accents
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Smooth Animations** - Fade-in and slide-up effects
- **Interactive Navigation** - Smooth scrolling with active section tracking
- **Experience Timeline** - Image carousels for each role
- **Project Showcase** - Detailed project cards with tech stacks
- **Skills Display** - Categorized technical skills with badges
- **Achievements** - Notable accomplishments with icons
- **Contact Section** - Social links and contact information

## 🛠️ Tech Stack

### Frontend
- **React** 19.0.0
- **React Router DOM** 7.5.1
- **Tailwind CSS** 3.4.17
- **shadcn/ui** components
- **Lucide React** for icons
- **Framer Motion** for animations

### Backend (Ready for integration)
- **FastAPI** 0.110.1
- **MongoDB** with Motor
- **Python** 3.x

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager
- Python 3.x (for backend)

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
yarn install

# Start development server
yarn start
```

The application will open at `http://localhost:3000`

### Backend Setup (Optional)

```bash
# Navigate to backend directory
cd backend

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

## 📁 Project Structure

```
santosh-portfolio/
├── frontend/
│   ├── public/
│   │   └── profile.jpeg           # Profile image
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.jsx     # Navigation bar
│   │   │   ├── Hero.jsx           # Hero section
│   │   │   ├── About.jsx          # About section
│   │   │   ├── Experience.jsx     # Experience timeline
│   │   │   ├── Projects.jsx       # Projects showcase
│   │   │   ├── Skills.jsx         # Skills display
│   │   │   ├── Achievements.jsx   # Achievements section
│   │   │   ├── Contact.jsx        # Contact section
│   │   │   └── ui/                # shadcn/ui components
│   │   ├── data/
│   │   │   └── mock.js            # Portfolio data
│   │   ├── pages/
│   │   │   └── Portfolio.jsx      # Main page component
│   │   ├── App.js                 # Root component
│   │   ├── App.css                # Custom animations
│   │   └── index.css              # Tailwind imports
│   ├── package.json
│   ├── tailwind.config.js
│   └── craco.config.js
├── backend/
│   ├── server.py                  # FastAPI server
│   ├── requirements.txt           # Python dependencies
│   └── .env                       # Environment variables
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `/frontend/src/data/mock.js` to update:
- Personal details (name, email, phone, links)
- About section
- Experience and leadership roles
- Projects
- Skills
- Achievements

### Change Theme Colors

Edit `/frontend/src/index.css` and `/frontend/tailwind.config.js` to customize:
- Primary colors (cyan, blue, purple)
- Background colors
- Accent colors
- Border styles

### Add New Sections

1. Create a new component in `/frontend/src/components/`
2. Import it in `/frontend/src/pages/Portfolio.jsx`
3. Add navigation link in `/frontend/src/components/Navigation.jsx`

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel
```

### Deploy to Netlify

```bash
# Build the project
cd frontend
yarn build

# Deploy the build folder to Netlify
```

### Deploy to GitHub Pages

```bash
# Add homepage to package.json
"homepage": "https://yourusername.github.io/santosh-portfolio"

# Install gh-pages
yarn add gh-pages

# Add deploy scripts to package.json
"scripts": {
  "predeploy": "yarn build",
  "deploy": "gh-pages -d build"
}

# Deploy
yarn deploy
```

## 📊 Key Highlights

- 🎓 **9.56 CGPA** at BMS College of Engineering
- 💻 **1000+ DSA Problems** solved across multiple platforms
- 🏆 **Dell Campus Ambassador** - Selected among 35 across India
- 📈 **30,000+ LinkedIn Impressions**
- ⚡ **148 WPM** typing speed

## 🔗 Links

- **GitHub**: [Santosh26b](https://github.com/Santosh26b)
- **LinkedIn**: [santosh-budagavi](https://linkedin.com/in/santosh-budagavi)
- **Codolio**: [Profile](https://codolio.com/profile/KFuVnUII)
- **Email**: santoshbudagavi@gmail.com

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Santosh B**
- Software Engineer | Backend & DevOps | DSA Enthusiast
- BMS College of Engineering, Bengaluru

---

⭐ Star this repository if you found it helpful!
