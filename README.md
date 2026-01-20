# Vite SPA Boilerplate

A minimal and fast Single Page Application (SPA) boilerplate built with Vite and React.

## Features

- **Vite** - Lightning fast build tool with HMR (Hot Module Replacement)
- **React 19** - Latest React with modern features
- **ESLint** - Code linting configured out of the box
- **Fast Refresh** - Instant feedback during development

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/meirbarda/vite-spa-boilerplate.git

# Navigate to the project
cd vite-spa-boilerplate

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
vite-spa-boilerplate/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── App.jsx      # Main App component
│   ├── App.css      # App styles
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── vite.config.js   # Vite configuration
└── package.json
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## License

MIT
