<div align="center">

# Zenyukti Website

**Modern, Fast, and Accessible Web Experience**

[![Live Website](https://img.shields.io/badge/🌐%20Live%20Website-Visit%20Now-blue?style=for-the-badge)](https://zenyukti.github.io/)
[![GitHub Stars](https://img.shields.io/github/stars/ZenYukti/zenyukti.github.io?style=for-the-badge&logo=github&color=yellow)](https://github.com/ZenYukti/zenyukti.github.io/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/ZenYukti/zenyukti.github.io?style=for-the-badge&logo=github&color=green)](https://github.com/ZenYukti/zenyukti.github.io/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/ZenYukti/zenyukti.github.io?style=for-the-badge&logo=github&color=red)](https://github.com/ZenYukti/zenyukti.github.io/issues)

[![Build Status](https://img.shields.io/github/actions/workflow/status/ZenYukti/zenyukti.github.io/deploy.yml?style=flat-square&logo=github-actions)](https://github.com/ZenYukti/zenyukti.github.io/actions)
[![License](https://img.shields.io/github/license/ZenYukti/zenyukti.github.io?style=flat-square)](LICENSE)
[![Code Size](https://img.shields.io/github/languages/code-size/ZenYukti/zenyukti.github.io?style=flat-square)](https://github.com/ZenYukti/zenyukti.github.io)
[![Last Commit](https://img.shields.io/github/last-commit/ZenYukti/zenyukti.github.io?style=flat-square)](https://github.com/ZenYukti/zenyukti.github.io/commits/main)

---

**[🌟 Live Demo](https://zenyukti.github.io/) • [📚 Documentation](https://github.com/ZenYukti/zenyukti.github.io/wiki) • [🐛 Report Bug](https://github.com/ZenYukti/zenyukti.github.io/issues) • [✨ Request Feature](https://github.com/ZenYukti/zenyukti.github.io/issues)**

</div>

---

## 📖 Table of Contents

<details>
<summary>Click to expand</summary>

1. [About The Project](#about-the-project)
2. [Built With](#built-with)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Development](#development)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Scripts](#available-scripts)
7. [Roadmap](#roadmap)
8. [Contributing](#contributing)
9. [Testing](#testing)
10. [Deployment](#deployment)
11. [Performance](#performance)
12. [Browser Support](#browser-support)
13. [License](#license)
14. [Contact](#contact)
15. [Acknowledgments](#acknowledgments)

</details>

---

## About The Project

<div align="center">
  <img src="/src/media/zenyukti-landingpage.png" alt="Zenyukti Website Screenshot" width="800">
</div>

<br>

Zenyukti Website is a modern, responsive web application built with cutting-edge technologies to deliver exceptional user experiences. Our mission is to provide a fast, accessible, and visually appealing platform that serves our community's needs.

### ✨ Key Features

- 📱 **Fully Responsive** - Seamless experience across all devices and screen sizes
- ⚡ **Lightning Fast** - Optimized performance with <3s load times
- 🔍 **SEO Optimized** - Built-in SEO best practices
- 🎨 **Modern Design** - Clean, intuitive user interface
- 🌙 **Dark Mode Support** - Toggle between light and dark themes (Coming Soon)
- 🔧 **Developer Friendly** - Well-documented codebase with modern tooling
- 🚀 **CI/CD Pipeline** - Automated testing and deployment (Coming Soon)
- 🔍 **Detailed Info** - Visit Wiki pages [Home Page - wiki | ZenYukti](https://github.com/ZenYukti/zenyukti.github.io/wiki)

---

## Built With

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.ecma-international.org/ecma-262/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

</div>

### Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | HTML5, CSS3, JavaScript ES6+ | Core web technologies |
| **Build Tool** | Vite | Fast build tool and dev server |
| **Package Manager** | npm | Dependency management |
| **Version Control** | Git | Source code management |
| **Hosting** | GitHub Pages | Static site hosting |
| **CI/CD** | GitHub Actions | Automated workflows |

---

## Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

Before you begin, ensure you have the following installed:

```bash
# Node.js (LTS version recommended)
node --version  # Should be v16.0.0 or higher

# npm (comes with Node.js)
npm --version   # Should be v7.0.0 or higher

# Git
git --version   # Any recent version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ZenYukti/zenyukti.github.io.git
   cd zenyukti.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file** (if needed)
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Development

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   
   Visit `http://localhost:5173` (or the URL shown in your terminal)

3. **Start coding!**
   
   The app will automatically reload when you make changes.

---

## Usage

### Basic Usage

The website is designed to be intuitive and user-friendly. Simply navigate to the [live site](https://zenyukti.github.io/) to explore all features.

### Development Workflow

```bash
# Start development server
npm run dev

# Run linting
npm run lint

# Format code
npm run format

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure
```
zenyukti.github.io/
├── 📁 .github/                    # GitHub configuration
│   └── 📁 ISSUE_TEMPLATE/         # Issue and PR templates
│       ├── 📄 bug_report.md       # Bug report template
│       └── 📄 feature_request.md  # Feature request template
├── 📁 dist/                       # Production build output (generated)
│   ├── 📁 assets/                 # Compiled assets (CSS, JS, images)
│   └── 📄 index.html              # Main HTML file
├── 📁 node_modules/               # Dependencies (auto-generated)
├── 📁 src/                        # Source code
│   ├── 📁 assets/                 # Static assets (images, fonts, icons)
│   ├── 📁 components/             # Reusable React components
│   ├── 📁 hooks/                  # Custom React hooks
│   ├── 📁 lib/                    # Utility libraries and helpers
│   ├── 📁 pages/                  # Page components/routes
│   ├── 📄 App.css                 # Main application styles
│   ├── 📄 App.tsx                 # Root React component
│   ├── 📄 index.css               # Global styles
│   └── 📄 main.tsx                # Application entry point
├── 📄 .gitignore                  # Git ignore patterns
├── 📄 components.json             # shadcn/ui component configuration
├── 📄 eslint.config.js            # ESLint configuration
├── 📄 index.html                  # HTML template
├── 📄 package-lock.json           # Locked dependency versions
├── 📄 package.json                # Project configuration & dependencies
├── 📄 postcss.config.js           # PostCSS configuration
├── 📄 README.md                   # Project documentation (this file)
├── 📄 tailwind.config.ts          # Tailwind CSS configuration
├── 📄 tsconfig.app.json           # TypeScript config for app
├── 📄 tsconfig.json               # Main TypeScript configuration
├── 📄 tsconfig.node.json          # TypeScript config for Node.js
└── 📄 vite.config.ts              # Vite build tool configuration
```
---

## Available Scripts

| Command | Description | Usage |
|---------|-------------|-------|
| `npm run dev` | Start development server | Development |
| `npm run build` | Build for production | Deployment |
| `npm run preview` | Preview production build | Testing |
| `npm run lint` | Run ESLint | Code quality |
| `npm run lint:fix` | Fix ESLint issues | Code quality |
| `npm run format` | Format with Prettier | Code style |
| `npm test` | Run test suite | Testing |
| `npm run test:watch` | Run tests in watch mode | Development |
| `npm run deploy` | Deploy to GitHub Pages | Deployment |

---

## Roadmap

See the [open issues](https://github.com/ZenYukti/zenyukti.github.io/issues) for a full list of proposed features and known issues.

### Upcoming Features

- [ ] **Multi-language Support** - Internationalization (i18n)
- [ ] **Progressive Web App** - PWA capabilities
- [ ] **Advanced Analytics** - Detailed user analytics
- [ ] **Content Management** - Dynamic content updates
- [ ] **API Integration** - External service integration
- [ ] **Performance Monitoring** - Real-time performance tracking

### Recent Updates

- [x] **Responsive Design** - Mobile-first approach
- [x] **Dark Mode** - Theme switching capability
- [x] **SEO Optimization** - Search engine optimization
- [x] **Accessibility** - WCAG 2.1 compliance

---

## Contributing

We love contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements.

### Quick Start for Contributors

1. **Fork the repo**
2. **Create your feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Make your changes**
4. **Run tests** (`npm test`)
5. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
6. **Push to the branch** (`git push origin feature/AmazingFeature`)
7. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure CI/CD pipeline passes

### Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

## Testing

We maintain high code quality through comprehensive testing.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run end-to-end tests
npm run test:e2e
```

### Testing Strategy

- **Unit Tests** - Individual component testing
- **Integration Tests** - Feature testing
- **End-to-End Tests** - Full user journey testing
- **Performance Tests** - Load and performance testing

---

## Deployment

### Automatic Deployment

The project is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `VITE_APP_TITLE` | App title | `Zenyukti` |
| `VITE_API_URL` | API endpoint | `undefined` |

---

## Performance

<div align="center">

| Metric | Desktop | Mobile |
|--------|---------|--------|
| **Performance** | 98 | 95 |
| **Accessibility** | 100 | 100 |
| **Best Practices** | 100 | 95 |
| **SEO** | 100 | 100 |

*Lighthouse scores (out of 100)*

</div>

### Performance Optimizations

- **Code Splitting** - Lazy loading of components
- **Image Optimization** - WebP format with fallbacks
- **Bundle Analysis** - Regular bundle size monitoring
- **Caching Strategy** - Aggressive caching for static assets
- **CDN Usage** - Fast content delivery

---

## Browser Support

<div align="center">

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Opera | 76+ | ✅ Full |

</div>

---

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

## Contact

<div align="center">

**Zenyukti Team**

[![Website](https://img.shields.io/badge/Website-zenyukti.github.io-blue?style=flat-square&logo=github)](https://zenyukti.github.io/)
[![Email](https://img.shields.io/badge/Email-teamzenyutki@gmail.com-red?style=flat-square&logo=gmail)](mailto:teamzenyutki@gmail.com)
[![Twitter](https://img.shields.io/badge/Twitter-@zenyukti-1DA1F2?style=flat-square&logo=twitter)](https://twitter.com/zenyukti)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Zenyukti-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/company/zenyukti)

**Project Links**

[🏠 Homepage](https://zenyukti.github.io/) • [📊 Issues](https://github.com/ZenYukti/zenyukti.github.io/issues) • [🚀 Releases](https://github.com/ZenYukti/zenyukti.github.io/releases) • [📈 Insights](https://github.com/ZenYukti/zenyukti.github.io/pulse)

</div>

---

## Acknowledgments

<div align="center">

**Special Thanks To:**

- 🙏 All [contributors](https://github.com/ZenYukti/zenyukti.github.io/contributors) who participated in this project
- 💡 The open-source community for inspiration and resources
- 🛠️ [Vite](https://vitejs.dev/) team for the amazing build tool
- 🎨 [GitHub](https://github.com/) for hosting and CI/CD capabilities
- 📚 [MDN Web Docs](https://developer.mozilla.org/) for comprehensive documentation

</div>

---

<div align="center">

**Made with ❤️ by the Zenyukti Team**

⭐ **Star this repository if you find it helpful!**

[![GitHub Stars](https://img.shields.io/github/stars/ZenYukti/zenyukti.github.io?style=social)](https://github.com/ZenYukti/zenyukti.github.io/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/ZenYukti/zenyukti.github.io?style=social)](https://github.com/ZenYukti/zenyukti.github.io/network/members)
[![GitHub Watchers](https://img.shields.io/github/watchers/ZenYukti/zenyukti.github.io?style=social)](https://github.com/ZenYukti/zenyukti.github.io/watchers)

</div>
