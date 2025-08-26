# NTH Bookmarks

A modern, beautiful bookmarks management application that transforms your browser bookmarks into an aesthetically pleasing, shareable website. Built with React, TypeScript, and Tailwind CSS.

![NTH Bookmarks](https://img.shields.io/badge/NTH-Bookmarks-blue)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)
![Vite](https://img.shields.io/badge/Vite-6.0.6-purple)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.17-teal)

## ✨ Features

- 🔍 **Smart Search** - Quick search through your bookmarks and folders
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🌙 **Theme Support** - Light and dark mode with smooth transitions
- 📂 **Hierarchical Organization** - Navigate through folders with breadcrumb navigation
- 🎨 **Beautiful UI** - Modern design with Tailwind CSS and HeadlessUI components
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🏷️ **Favicon Support** - Displays website favicons for visual recognition
- 📊 **State Management** - Powered by Zustand for efficient state management

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ or [Bun](https://bun.sh/) (recommended)
- Modern web browser

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/nth-bookmarks.git
cd nth-bookmarks
```

2. Install dependencies:

```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install
```

3. Start the development server:

```bash
# Using Bun
bun dev

# Or using npm
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📖 Usage

### Loading Bookmarks Data

The application loads bookmarks from a remote JSON source by default. The data structure follows a hierarchical format with folders and links:

```typescript
type ConfigItem = {
  type: "link" | "folder";
  id: string;
  addDate: number;
  title: string;
  icon: string;
  url: string;
  children?: ConfigItem[];
};
```

### Navigation

- **Browse Folders**: Click on folder names to navigate into them
- **Breadcrumb Navigation**: Use the breadcrumb trail to navigate back to parent folders
- **Search**: Use the search bar to quickly find bookmarks across all folders
- **Theme Toggle**: Switch between light and dark themes
- **Mobile Menu**: Access navigation on mobile devices through the hamburger menu

### URL Parameters

The application supports URL parameters for direct navigation:

- `?p=folder1_subfolder2` - Navigate directly to nested folders using underscore-separated paths

## 🛠️ Development

### Project Structure

```
nth-bookmarks/
├── public/                 # Static assets
│   ├── favicon/           # Favicon files
│   └── default-icon.svg   # Default bookmark icon
├── src/
│   ├── assets/           # Application assets
│   ├── components/       # React components
│   │   ├── bookmarks.tsx     # Main bookmarks display
│   │   ├── breadcrumbs.tsx   # Navigation breadcrumbs
│   │   ├── header.tsx        # Application header
│   │   ├── navigation.tsx    # Desktop navigation
│   │   ├── mobile-*.tsx      # Mobile-specific components
│   │   ├── search-bar.tsx    # Search functionality
│   │   ├── sidebar.tsx       # Desktop sidebar
│   │   └── theme-button.tsx  # Theme toggle
│   ├── data/             # Data files
│   │   └── pintree.json  # Sample bookmarks data
│   ├── routes/           # React Router pages
│   │   ├── main-page.tsx     # Main application page
│   │   └── not-found.tsx     # 404 page
│   ├── store/            # State management
│   │   ├── app-store.ts      # Zustand store
│   │   └── helper.ts         # Store utilities
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── types.ts          # TypeScript type definitions
├── index.html            # HTML template
└── package.json          # Project configuration
```

### Key Technologies

- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Simple state management
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[HeadlessUI](https://headlessui.com/)** - Unstyled, accessible UI components
- **[React TWC](https://github.com/gregberge/twc)** - Tailwind CSS in TypeScript

### Available Scripts

```bash
# Development
bun dev          # Start development server
npm run dev

# Building
bun run build    # Build for production
npm run build

# Linting
bun run lint     # Run ESLint
npm run lint

# Preview
bun run preview  # Preview production build
npm run preview
```

### Customization

#### Changing Data Source

To use your own bookmarks data, modify the `fetchData` function in [`src/App.tsx`](src/App.tsx:19):

```typescript
const res = await fetch("your-bookmarks-data-url.json");
```

#### Styling

The application uses Tailwind CSS for styling. Custom styles can be added to:

- [`src/index.css`](src/index.css) - Global styles
- Individual component files - Component-specific styles

#### Theme Configuration

Theme settings are managed in [`tailwind.config.js`](tailwind.config.js) and can be customized with:

- Custom colors
- Typography scales
- Spacing systems
- Component variants

## 🚢 Deployment

### Build for Production

```bash
bun run build
# or
npm run build
```

The build output will be in the `dist/` directory.

### Deployment Options

- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Static Hosting**: Upload the `dist/` contents to any static host

### Environment Configuration

For production deployment, ensure:

1. Update the base path in [`vite.config.ts`](vite.config.ts) if deploying to a subdirectory
2. Configure the correct data source URL in the app
3. Set up proper caching headers for static assets

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and TypeScript patterns
- Add tests for new features
- Update documentation as needed
- Ensure accessibility compliance
- Test on multiple screen sizes and devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Icons provided by website favicons
- Design inspiration from modern bookmark managers
- Community feedback and contributions

## 📞 Support

- 📧 Email: [your-email@example.com](mailto:your-email@example.com)
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/nth-bookmarks/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/your-username/nth-bookmarks/discussions)

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/nthung2112">nthung2112</a>
</div>
