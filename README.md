## Prerequisites

Before you begin, ensure you have installed:
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Installation


1. Install dependencies:
```bash
npm install
```

2. Configure the project:
   - Rename the repository name in `vite.config.ts`:
     - Update `base: '/repository-name/'` with your actual repository name
   - Update the homepage in `package.json`:
     - Replace `{username}` and `{repository-name}` with your GitHub username and repository name

## Development

To start the development server:

```bash
npm run dev
```

The development server will start at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured for GitHub Pages deployment. To deploy:

1. Make sure your repository settings are configured for GitHub Pages
2. Run the deploy command:

```bash
npm run deploy
```

## Project Structure

```
cyber-security-blog/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── styles/        # Global styles and Tailwind config
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Utility functions
├── public/            # Static assets
├── package.json       # Project dependencies and scripts
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages
- `npm run predeploy` - Build before deployment (runs automatically)

## Dependencies

### Main Dependencies
- React 18
- React Router DOM
- React Markdown
- React Syntax Highlighter
- Day.js
- Lucide React (for icons)

### Development Dependencies
- TypeScript
- Vite
- Tailwind CSS
- ESLint
- PostCSS
- Autoprefixer

## Styling Features

### Text Highlighting

The blog supports various text highlighting options using HTML spans with CSS classes:

```html
<span class="highlight-red">Red text</span>
<span class="highlight-blue">Blue text</span>
<span class="highlight-green">Green text</span>
<span class="highlight-yellow">Yellow text</span>
<span class="highlight-purple">Purple text</span>
<span class="highlight-orange">Orange text</span>
<span class="highlight-cyan">Cyan text</span>
```

Semantic colors are also available:
```html
<span class="highlight-success">Success message</span>
<span class="highlight-warning">Warning message</span>
<span class="highlight-danger">Danger message</span>
<span class="highlight-info">Info message</span>
```

### Code Block Formatting

When writing articles, use the following language tags for optimal syntax highlighting:

- JavaScript/TypeScript: ```js
- HTML: ```html
- CSS: ```css
- Plain text (e.g., URLs): ```plaintext

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 