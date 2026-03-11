# Yieldra Protocol Documentation

> Documentation site for Yieldra - A full-stack DeFi solution bringing together DEX, lending, launchpad, and more.

This documentation is built with [Docus](https://docus.dev) - a beautiful documentation theme powered by Nuxt.

## ✨ Features

- 🎨 **Beautiful Design** - Clean, modern documentation theme
- 📱 **Responsive** - Mobile-first responsive design  
- 🌙 **Dark Mode** - Built-in dark/light mode support
- 🔍 **Search** - Full-text search functionality
- 📝 **Markdown Enhanced** - Extended markdown with custom components
- 🎨 **Customizable** - Easy theming and brand customization
- ⚡ **Fast** - Optimized for performance with Nuxt 4
- 🔧 **TypeScript** - Full TypeScript support

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Your documentation site will be running at `http://localhost:3000`

## 📁 Project Structure

```
docs/
├── content/              # Documentation content
│   ├── index.md         # Homepage
│   ├── 1.getting-started/      # Overview section
│   ├── 2.products/      # Product documentation
│   │   ├── 1.yieldra-amm.md
│   │   ├── 2.yieldra-lending.md
│   │   ├── 3.yieldra-alpha.md
│   │   └── 4.usdy.md
│   └── 3.yra-token/     # YRA token do cumentation
│       ├── 1.staking.md
│       └── 2.airdrops.md
├── app/                 # App configuration
│   └── app.config.ts   # Docus configuration
├── public/              # Static assets
└── package.json         # Dependencies
```

## 📝 Documentation Sections

- **Overview** - Introduction to Yieldra Protocol
- **Products**
  - [Yieldra AMM](/products/yieldra-amm) - Multi-yielding liquidity provision
  - [Yieldra Lending](/products/yieldra-lending) - Decentralized money market
  - [Yieldra Alpha](/products/yieldra-alpha) - Community-driven launchpad (Coming Soon)
  - [USDY](/products/usdy) - Decentralized stablecoin (Coming Soon)
- **YRA Token**
  - [Staking](/yra-token/staking) - Time-weighted staking with Yieldra Power
  - [Airdrops](/yra-token/airdrops) - Epoch-based reward system

## ⚡ Built with

- [Nuxt 4](https://nuxt.com) - The web framework
- [Nuxt Content](https://content.nuxt.com/) - File-based CMS
- [Nuxt UI](https://ui.nuxt.com) - UI components
- [Nuxt Image](https://image.nuxt.com/) - Optimized images
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Docus Layer](https://www.npmjs.com/package/docus) - Documentation theme

## 📖 Documentation

For detailed documentation on customizing your Docus project, visit the [Docus Documentation](https://docus.dev)

### 🤖 AI Assistant Skill

Get started quickly with Docus by adding specialized knowledge to your AI assistant:

```bash
npx skills add nuxt-content/docus
```

## 🚀 Deployment

Deployed to Vercel with automatic deployments from the main branch.

Build for production:

```bash
pnpm run build
```

## 📄 License

[MIT License](https://opensource.org/licenses/MIT) 